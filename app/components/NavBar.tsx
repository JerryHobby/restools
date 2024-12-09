'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'night' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="btn btn-ghost btn-circle" aria-label="Toggle Theme">
      {theme === 'night' ? (
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
}

function NavItems({ className = '' }: NavItemsProps) {
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

  useEffect(() => {
    const handleRouteChange = () => {
      setOpenDropdown(null);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleSummaryClick = (e: React.MouseEvent, dropdownName: string) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
  };

  return (
    <ul className={className} ref={menuRef}>
      <li className="relative">
        <details open={openDropdown === 'calls'} className="dropdown">
          <summary onClick={(e) => handleSummaryClick(e, 'calls')} className="hover:bg-base-200">
            Call Journal
          </summary>
          <ul className="p-1 w-48 absolute bg-base-100 dark:bg-gray-700 shadow-xl dark:shadow-none dark:border dark:border-gray-600 rounded-box -mt-2 z-50">
            <li>
              <Link href="/calls/callrecord" onClick={handleLinkClick}>
                Call Record
              </Link>
            </li>
            <li>
              <Link href="/calls/callerhistory" onClick={handleLinkClick}>
                Caller's History
              </Link>
            </li>
            <li>
              <Link href="/calls/dailyhistory" onClick={handleLinkClick}>
                Daily History
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li className="relative">
        <details open={openDropdown === 'time'} className="dropdown">
          <summary onClick={(e) => handleSummaryClick(e, 'time')} className="hover:bg-base-200">
            Time Mgmt
          </summary>
          <ul className="p-1 w-48 absolute bg-base-100 dark:bg-gray-700 shadow-xl dark:shadow-none dark:border dark:border-gray-600 rounded-box -mt-2 z-50">
            <li>
              <Link href="/time/loadstaffman" onClick={handleLinkClick}>
                Load Staffman
              </Link>
            </li>
            <li>
              <Link href="/time/tracktime" onClick={handleLinkClick}>
                Track Time
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li className="relative">
        <details open={openDropdown === 'tools'} className="dropdown">
          <summary onClick={(e) => handleSummaryClick(e, 'tools')} className="hover:bg-base-200">
            Tools
          </summary>
          <ul className="p-1 w-48 absolute bg-base-100 dark:bg-gray-700 shadow-xl dark:shadow-none dark:border dark:border-gray-600 rounded-box -mt-2 z-50">
            <li>
              <Link href="/tools/airlines" onClick={handleLinkClick}>
                Airlines
              </Link>
            </li>
            <li>
              <Link href="/tools/airports" onClick={handleLinkClick}>
                Airports
              </Link>
            </li>
            <li>
              <Link href="/tools/hubs" onClick={handleLinkClick}>
                Hubs
              </Link>
            </li>
            <li>
              <Link href="/tools/clocks" onClick={handleLinkClick}>
                World Clocks
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li className="relative">
        <details open={openDropdown === 'account'} className="dropdown">
          <summary onClick={(e) => handleSummaryClick(e, 'account')} className="hover:bg-base-200">
            Account
          </summary>
          <ul className="p-1 w-48 absolute bg-base-100 dark:bg-gray-700 shadow-xl dark:shadow-none dark:border dark:border-gray-600 rounded-box -mt-2 z-50">
            <li>
              {session ? (
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick();
                    signOut();
                  }}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick();
                    signIn();
                  }}
                >
                  Login
                </Link>
              )}
            </li>
            {session && (
              <li>
                <Link href="/account/profile" onClick={handleLinkClick}>
                  Profile
                </Link>
              </li>
            )}
          </ul>
        </details>
      </li>
      <li className="relative">
        <details open={openDropdown === 'help'} className="dropdown">
          <summary onClick={(e) => handleSummaryClick(e, 'help')} className="hover:bg-base-200">
            Help
          </summary>
          <ul className="p-1 w-48 absolute bg-base-100 dark:bg-gray-700 shadow-xl dark:shadow-none dark:border dark:border-gray-600 rounded-box -mt-2 z-50">
            <li>
              <Link href="/faq" onClick={handleLinkClick}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}

const styles = `
  .dropdown[open] > ul {
    margin-top: 0 !important;
    top: 100%;
  }
`;

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-base-100 shadow-lg dark:shadow-none dark:border-b dark:border-gray-600">
      <style>{styles}</style>
      <div className="navbar">
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
            <NavItems className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[60] mt-2 w-52 p-1 shadow" />
          </div>
          <Link href="/" className="btn btn-ghost text-xl btn-sm">
            ResTools
          </Link>
          <NavItems className="menu menu-horizontal px-1 hidden lg:flex" />
        </div>
        <div className="navbar-end">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
