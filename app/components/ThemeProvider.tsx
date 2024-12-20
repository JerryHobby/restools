'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'night';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'light',
  setTheme: () => null,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only run on client side
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'night'
      : 'light';
    const initialTheme = savedTheme || systemTheme;

    // Update localStorage if it contains 'night'
    if (savedTheme === 'night') {
      setTheme('night');
      document.documentElement.setAttribute('data-theme', 'night');
      document.documentElement.classList.add('night');
    } else {
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
      document.documentElement.classList.add(initialTheme);
    }
    setIsMounted(true);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);

    // Remove previous theme class and add new theme class
    document.documentElement.classList.remove('light', 'night');
    document.documentElement.classList.add(newTheme);
  };

  // Prevent rendering until theme is initialized to avoid hydration mismatches
  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}
