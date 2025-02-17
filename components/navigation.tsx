"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { WaitlistFormContext } from "@/components/waitlist-form-context";

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const waitlistFormRef = useContext(WaitlistFormContext);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the sentinel exits viewport (scrolled past it), make nav sticky
        setIsSticky(!entry.isIntersecting);
      },
      {
        // Start detecting when the sentinel is 64px (nav height) from viewport top
        rootMargin: "-64px 0px 0px 0px",
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleJoinWaitlist = () => {
    // Close mobile menu if open
    if (isMenuOpen) {
      toggleMenu();
    }

    // First open the form
    waitlistFormRef?.current?.openForm();

    // Then scroll to it
    const waitlistForm = document.getElementById("waitlist-form");
    if (waitlistForm) {
      setTimeout(() => {
        waitlistForm.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <>
      {/* Sentinel div at bottom of hero section */}
      <div className='relative'>
        <nav
          className={cn(
            "w-full z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm transition-all duration-200",
            isSticky ? "fixed top-0 left-0 right-0 shadow-sm" : "relative"
          )}
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16 items-center'>
              <div className='flex-shrink-0'>
                <Link href='/' className='flex items-center'>
                  <img
                    src='/walnut-logo.svg'
                    alt='Walnut Exchange'
                    className='h-8 w-8'
                  />
                  <span className='ml-2 text-xl font-semibold text-gray-900'>
                    Walnut Exchange
                  </span>
                </Link>
              </div>
              {/* Desktop Navigation */}
              <div className='hidden sm:flex sm:items-center sm:space-x-8'>
                <Link
                  href='/'
                  className={cn(
                    "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2",
                    pathname === "/"
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  )}
                >
                  Home
                </Link>
                <Link
                  href='/about-us'
                  className={cn(
                    "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2",
                    pathname === "/about-us"
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  )}
                >
                  Why Walnut?
                </Link>
                <Button
                  onClick={handleJoinWaitlist}
                  className='bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6'
                >
                  Join Waitlist
                </Button>
              </div>
              {/* Mobile menu button */}
              <div className='sm:hidden'>
                <button
                  type='button'
                  onClick={toggleMenu}
                  className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900'
                >
                  <span className='sr-only'>Open main menu</span>
                  {isMenuOpen ? (
                    <X className='block h-6 w-6' />
                  ) : (
                    <Menu className='block h-6 w-6' />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div
          ref={observerRef}
          className='absolute h-1 w-full bottom-0 pointer-events-none'
        />
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-50 bg-white sm:hidden'>
          <div className='flex flex-col h-full'>
            <div className='flex items-center justify-between px-4 h-16 border-b border-gray-200'>
              <Link href='/' className='flex items-center' onClick={toggleMenu}>
                <img
                  src='/walnut-logo.svg'
                  alt='Walnut Exchange'
                  className='h-8 w-8'
                />
                <span className='ml-2 text-xl font-semibold text-gray-900'>
                  Walnut Exchange
                </span>
              </Link>
              <button
                type='button'
                onClick={toggleMenu}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900'
              >
                <span className='sr-only'>Close main menu</span>
                <X className='block h-6 w-6' />
              </button>
            </div>
            <div className='flex-1 px-4 pt-8 pb-3 space-y-6'>
              <Link
                href='/'
                onClick={toggleMenu}
                className={cn(
                  "block px-3 py-4 text-base font-medium rounded-lg",
                  pathname === "/"
                    ? "bg-gray-900 text-white"
                    : "text-gray-900 hover:bg-gray-100"
                )}
              >
                Home
              </Link>
              <Link
                href='/about-us'
                onClick={toggleMenu}
                className={cn(
                  "block px-3 py-4 text-base font-medium rounded-lg",
                  pathname === "/about-us"
                    ? "bg-gray-900 text-white"
                    : "text-gray-900 hover:bg-gray-100"
                )}
              >
                Why Walnut?
              </Link>
              <Button
                onClick={handleJoinWaitlist}
                className='w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full py-4 text-base font-medium'
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* Spacer to prevent content from going under fixed nav when sticky */}
      {isSticky && <div className='h-16'></div>}
    </>
  );
}
