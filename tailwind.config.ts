import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#0066cc',
          'primary-focus': '#0052a3',
          'primary-content': '#ffffff',

          secondary: '#404040',
          'secondary-focus': '#4d4d4d',
          'secondary-content': '#ffffff',

          accent: '#66b3ff',
          'accent-focus': '#99ccff',
          'accent-content': '#ffffff',

          neutral: '#2d2d2d',
          'neutral-focus': '#404040',
          'neutral-content': '#ffffff',

          'base-100': '#1a1a1a',
          'base-200': '#2d2d2d',
          'base-300': '#404040',
          'base-content': '#ffffff',

          info: '#66b3ff',
          success: '#4caf50',
          warning: '#ff9800',
          error: '#f44336',
          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.3rem',
          '--rounded-badge': '0.5rem',
          '--animation-btn': '0.25s',
          '--animation-input': '0.2s',
          '--btn-text-case': 'uppercase',
          '--navbar-padding': '0.25rem',
          '--border-btn': '1px',
        },
        light: {
          primary: '#570DF8',
          secondary: '#F000B8',
          accent: '#37CDBE',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
    darkTheme: 'dark',
  },
};

export default config;
