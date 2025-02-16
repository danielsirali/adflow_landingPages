"use client";

import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import React, { useEffect, useState, useRef } from "react";
import CallToAction from "@/components/CallToAction";

export default function HowItWorks() {
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
      <section className="max-w-6xl mx-auto px-2 py-12">
        <p className="text-gray-500 uppercase font-semibold text-sm mb-4">
          How It Works
        </p>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Ad Booking, Simplified In 4 Easy Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          <div className="">
            <div className="mt-10 space-y-8">
              <div className="flex items-start w-full">

                  <i className="bx bx-user-circle text-xl text-white bg-red-500 rounded-lg p-3"></i>
         
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-500">
                    Step 1: Sign Up & Create Profile
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Register quickly on Adflow, and unlock your gateway to a
                    world of seamless media transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start w-full">
                <i className="bx bxs-dashboard text-xl text-white bg-red-500 rounded-lg p-3"></i>

                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-500">
                    Step 2: Browse & Discover Slots
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Effortlessly find the ad slots that perfectly match your
                    target audience and budget, whether you’re on TV, radio,
                    print, digital, or outdoor channels.
                  </p>
                </div>
              </div>

              <div className="flex items-start w-full">
                <i className="bx bx-upload text-xl text-white bg-red-500 rounded-lg p-3"></i>

                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-500">
                    Step 3: Book & Upload Your Ad
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Secure your ideal slot in just a few clicks. Upload your
                    creative material and schedule your campaign with ease, so
                    you can focus on delivering compelling messages to your
                    audience.
                  </p>
                </div>
              </div>

              <div className="flex items-start w-full">
                <i className="bx bx-search-alt text-xl text-white bg-red-500 rounded-lg p-3"></i>

                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-500">
                    Step 4: Track Performance in Real-Time
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Monitor every campaign with our detailed analytics
                    dashboard. Gain insights into performance metrics, adjust
                    strategies on the fly, and ensure your ad spend delivers
                    measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <img
              src="/images/color_background.png"
              alt="Adflow steps illustration"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <CallToAction />

      <Footer />
    </>
  );
}
