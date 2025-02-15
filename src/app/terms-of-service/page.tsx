"use client";

import MainNav from "@/components/MainNav";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function TermsofService() {
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
    <>
      <MainNav />

      <section className="max-w-6xl mx-auto bg-white text-black p-6 rounded-lg ">
        <h1 className="text-xl text-center  text-black font-semibold pb-4">
          Terms of Service
        </h1>
        <div className="mt-4">
          <h2 className="font-semibold text-2xl">Acceptance of Terms</h2>
          <p className="text-sm mt-2">
            By accessing this site, you agree to be bound by these Terms of
            Service...
          </p>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold text-2xl">Description of the Service</h2>
          <p className="text-sm mt-2">The service includes...</p>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold text-2xl">Eligibility</h2>
          <p className="text-sm mt-2">
            You must be at least 18 years old to use this service...
          </p>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold text-2xl">User Account & Registration</h2>
          <p className="text-sm mt-2">
            You agree to provide accurate and complete information...
          </p>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold text-2xl">Use of Service</h2>
          <p className="text-sm mt-2">
            The service should not be used for illegal purposes...
          </p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold text-2xl">Contact Us</h2>
          <p className="text-sm mt-2">
            If you have questions or need assistance, please contact support...
          </p>
        </div>
      </section>
    </>
  );
}
