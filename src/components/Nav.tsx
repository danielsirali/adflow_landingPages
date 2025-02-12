import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function Nav() {
  const [loading, setLoading] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <nav className="flex justify-between items-center px-6 relative z-10">
      <div className="text-2xl font-bold lg:ml-24">
        <div className="w-full py-4">
          <img
            src="/images/adflow_logo.png"
            alt="Adflow Logo"
            className="w-24 py-4 object-cover"
          />
        </div>
      </div>

      <div className="flex justify-between items-center space-x-10 mr-28 text-white text-md hidden md:flex">
        <div className="flex space-x-16">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="about-us" className="hover:text-black text-white">
            About Us
          </Link>
          <Link href="/how-it-works" className="hover:text-black text-white">
            How it Works
          </Link>
          <Link href="/contact-us" className="hover:text-black text-white">
            Contact Us
          </Link>
        </div>

        <Link href="/auth/register">
          <div className="bg-white text-red-600 px-4 py-2 mr-8 border border-red-600 rounded-md hover:bg-red-600">
            Sign up
          </div>
        </Link>
        <span className="text-white">EN ▾</span>
      </div>

      <div className="md:hidden flex items-center p-2">
        <button
          onClick={toggleMobileMenu}
          className="focus:outline-none border border-red-400 rounded-lg"
        >
          <i className="bx bx-menu text-xl text-red-400"></i>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-0 left-0 w-full h-screen rounded-lg bg-red-50 bg-opacity-90 flex flex-col items-center justify-center space-y-6 md:hidden"
        >
          <Link
            href="#"
            className="text-red-500 cursor-pointer text-xl hover:text-black"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-red-500 cursor-pointer text-xl hover:text-black"
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-red-500 cursor-pointer text-xl hover:text-black"
            onClick={toggleMobileMenu}
          >
            How it Works
          </Link>
          <Link
            href="/auth/register"
            className="text-red-500 cursor-pointer text-xl hover:text-black"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </Link>
          <button
            className="bg-white text-red-600 px-4 py-2 border border-red-600 rounded-md hover:bg-red-600"
            onClick={toggleMobileMenu}
          >
            Sign up
          </button>
          <span className="text-red-500 cursor-pointer text-xl">EN ▾</span>
        </div>
      )}
    </nav>
  );
}
