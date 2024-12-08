'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import { signIn, signOut, useSession } from 'next-auth/react';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="btn btn-ghost btn-circle" aria-label="Toggle Theme">
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.636 5.636m12.728 12.728L18.364 18.364M12 7a5 5 0 110 10 5 5 0 010-10z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-6 h-6 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}

interface NavItemsProps {
  className?: string;
  onNavigate: (route: string) => void;
}

function NavItems({ className = '', onNavigate }: NavItemsProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const { data: session } = useSession();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSummaryClick = (e: React.MouseEvent, dropdownName: string) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleNavigation = (e: React.MouseEvent, route: string) => {
    e.preventDefault();
    onNavigate(route);
    setOpenDropdown(null);
  };

  return (
    <ul className={className} ref={menuRef}>
      <li className="relative">
        <details open={openDropdown === 'calls'} className="dropdown">
          <summary onClick={(e) => handleSummaryClick(e, 'calls')} className="hover:bg-base-200">
            Call Journal
          </summary>
          <ul className="p-1 w-48 absolute bg-base-100 shadow-xl rounded-box -mt-2 z-50">
            <li>
              <a href="#" onClick={(e) => handleNavigation(e, '/calls/callrecord')}>
                Call Record
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleNavigation(e, '/calls/callerhistory')}>
                Caller's History
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleNavigation(e, '/calls/dailyhistory')}>
                Daily History
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li className="relative">
        <details open={openDropdown === 'time'} className="dropdown">
          <summary onClick={(e) => handleSummaryClick(e, 'time')} className="hover:bg-base-200">
            Time Mgmt
          </summary>
          <ul className="p-1 w-48 absolute bg-base-100 shadow-xl rounded-box -mt-2 z-50">
            <li>
              <a href="#" onClick={(e) => handleNavigation(e, '/time/loadstaffman')}>
                Load Staffman
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleNavigation(e, '/time/tracktime')}>
                Track Time
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li className="relative">
        <details open={openDropdown === 'tools'} className="dropdown">
          <summary onClick={(e) => handleSummaryClick(e, 'tools')} className="hover:bg-base-200">
            Tools
          </summary>
          <ul className="p-1 w-48 absolute bg-base-100 shadow-xl rounded-box -mt-2 z-50">
            <li>
              <a href="#" onClick={(e) => handleNavigation(e, '/tools/airlines')}>
                Airlines
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleNavigation(e, '/tools/airports')}>
                Airports
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleNavigation(e, '/tools/hubs')}>
                US Hubs
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleNavigation(e, '/tools/clocks')}>
                World Clocks
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li className="relative">
        <details open={openDropdown === 'account'} className="dropdown">
          <summary onClick={(e) => handleSummaryClick(e, 'account')} className="hover:bg-base-200">
            Account
          </summary>
          <ul className="p-1 w-48 absolute bg-base-100 shadow-xl rounded-box -mt-2 z-50">
            <li>
              {session ? (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  Logout
                </a>
              ) : (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Login
                </a>
              )}
            </li>
            {session && (
              <li>
                <a href="#" onClick={(e) => handleNavigation(e, '/account/profile')}>
                  Profile
                </a>
              </li>
            )}
          </ul>
        </details>
      </li>
      <li className="relative">
        <details open={openDropdown === 'restools'} className="dropdown">
          <summary onClick={(e) => handleSummaryClick(e, 'restools')} className="hover:bg-base-200">
            Res Tools
          </summary>
          <ul className="p-1 w-48 absolute bg-base-100 shadow-xl rounded-box -mt-2 z-50">
            <li>
              <a href="#" onClick={(e) => handleNavigation(e, '/about')}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => handleNavigation(e, '/contact')}>
                Contact Us
              </a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}

interface NavBarProps {
  onNavigate: (route: string) => void;
}

const styles = `
  .dropdown[open] > ul {
    margin-top: 0 !important;
    top: 100%;
  }
`;

export default function NavBar({ onNavigate }: NavBarProps) {
  return (
    <>
      <style>{styles}</style>
      <div className="navbar bg-base-100 relative z-50 py-1 min-h-0 h-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <NavItems
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-2 w-52 p-1 shadow z-50"
              onNavigate={onNavigate}
            />
          </div>
          <a
            href="#"
            className="btn btn-ghost text-xl btn-sm"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('');
            }}
          >
            ResTools
          </a>
          <NavItems className="menu menu-horizontal px-1 hidden lg:flex" onNavigate={onNavigate} />
        </div>
        <div className="navbar-end">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
