import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [loading, setLoading] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const isActive = (path: string): boolean =>
    pathname === path || pathname.startsWith(path);

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
    <>
      <nav className="flex justify-between items-center px-10 relative z-10">
        <div className="text-2xl font-bold lg:ml-24">
          <div className="w-full py-4">
            <img
              src="/images/adflow_logo.png"
              alt="Adflow Logo"
              className="w-28 py-4 object-cover"
            />
          </div>
        </div>

        <div className="flex justify-between items-center text-bold space-x-10 text-white text-sm hidden md:flex">
          <div className="flex space-x-16 mr-20 font-bold text-sm">
            <Link
              href="/"
              className={`relative px-4 flex flex-row items-center focus:outline-none ${
                isActive("/")
                  ? "text-red-500 underline underline-offset-8"
                  : "text-black hover:text-red-500"
              }  pr-6`}
              style={isActive("/") ? { color: "#F20519" } : {}}
            >
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
            <div className="bg-white text-red-600 px-4 py-2 mr-8 text-sm font-bold border-none rounded-md hover:text-white hover:bg-red-600">
              Sign up
            </div>
          </Link>
          <span className="text-white font-bold text-sm">EN ▾</span>
        </div>

        <div className="md:hidden absolute right-0 flex p-2">
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
            href="/"
            className="text-red-500 cursor-pointer text-xl hover:text-black"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-red-500 cursor-pointer text-xl hover:text-black"
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <Link
            href="/how-it-works"
            className="text-red-500 cursor-pointer text-xl hover:text-black"
            onClick={toggleMobileMenu}
          >
            How it Works
          </Link>
          <Link
            href="/contact-us"
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
    </>
  );
}
