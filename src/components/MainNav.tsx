import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
// import { useSelector } from "react-redux";

export default function MainNav() {
  const [loading, setLoading] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // const user = useSelector((state) => state.user.username);

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

      <div className="flex justify-between items-center space-x-10 mr-28 text-black text-sm hidden md:flex">
        <div className="flex space-x-16 font-bold">
          <Link href="/" className="text-black hover:text-red-500">
            Home
          </Link>
          <Link
            href="/about-us"
            className={`relative px-4 flex flex-row items-center focus:outline-none ${
              isActive("/about-us")
                ? "text-red-500 underline underline-offset-8"
                : "text-black hover:text-red-500"
            }  pr-6`}
            style={isActive("/about-us") ? { color: "#F20519" } : {}}
          >
            About Us
          </Link>
          <Link
            href="/how-it-works"
            className={`relative px-4 flex flex-row items-center focus:outline-none ${
              isActive("/how-it-works")
                ? "text-red-500 underline underline-offset-8"
                : "text-black hover:text-red-500"
            }  pr-6`}
            style={isActive("/how-it-works") ? { color: "#F20519" } : {}}
          >
            How it Works
          </Link>
          <Link
            href="/contact-us"
            className={`relative px-4 flex flex-row items-center focus:outline-none ${
              isActive("/contact-us")
                ? "text-red-500 underline underline-offset-8"
                : "text-black hover:text-red-500"
            }  pr-6`}
            style={isActive("/contact-us") ? { color: "#F20519" } : {}}
          >
            Contact Us
          </Link>
        </div>

        <Link href="/auth/register">
          <div className="bg-white text-red-600 px-4 py-2 mr-8 border border-red-600 rounded-md hover:text-white hover:bg-red-600">
            Sign up
          </div>
        </Link>

        {/* {user ? (
          <Link href="/user/profile">
            <i className="bx bxs-user-circle text-xl"></i> // User icon
          </Link>
        ) : (

        )} */}
        <span className="text-black">EN ▾</span>
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
          <Link
            href="/auth/register"
            className="bg-white text-red-600 px-4 py-2 border border-red-600 rounded-md hover:bg-red-600"
          >
            Sign up
          </Link>
          <span className="text-red-500 cursor-pointer text-xl">EN ▾</span>
        </div>
      )}
    </nav>
  );
}
