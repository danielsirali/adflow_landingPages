"use client";

import MainNav from "@/components/MainNav";
import Nav from "@/components/Nav";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

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
      <section className="max-w-6xl mx-auto px-2">
        <div className="mt-20 flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="md:w-1/2">
            <p className="text-gray-500 uppercase font-semibold text-sm">
              How It Works
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ad Booking, Simplified In 4 Easy Steps
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-500 text-red-500 flex items-center justify-center rounded-lg">
                  <img
                    src="/images/sign_up_vector.png"
                    alt="Adflow dashboard interface showcasing analytics and booking management."
                    className="object-cover rounded-lg w-5"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-500">
                    Step 1: Sign Up & Create Profile
                  </h3>
                  <p className="text-gray-600">
                    Register as an advertiser or media house.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-500 text-red-500 flex items-center justify-center rounded-lg">
                  <img
                    src="/images/browse_vector.png"
                    alt="Adflow dashboard interface showcasing analytics and booking management."
                    className="object-cover  w-4"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-500">
                    Step 2: Browse & Discover Slots
                  </h3>
                  <p className="text-gray-600">
                    Use filters to find the perfect slots based on your target
                    audience and budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-500 text-red-500 flex items-center justify-center rounded-lg">
                  <img
                    src="/images/upload_vector.png"
                    alt="Adflow dashboard interface showcasing analytics and booking management."
                    className="object-cover rounded-lg w-5"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-500">
                    Step 3: Book & Upload Your Ad
                  </h3>
                  <p className="text-gray-600">
                    Secure your slot, upload your creative material, and
                    schedule your campaign.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-500 text-red-500 flex items-center justify-center rounded-lg">
                  <img
                    src="/images/track_perfomance.png"
                    alt="Adflow dashboard interface showcasing analytics and booking management."
                    className=" rounded-lg w-5"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-500">
                    Step 4: Track Performance in Real-Time
                  </h3>
                  <p className="text-gray-600">
                    Access detailed analytics to measure the success of your
                    campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="/images/color_background.png"
              alt="Adflow steps illustration"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-red-50 py-12 px-6 mr-10 ml-10 rounded-lg">
        <div className="px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Ready to Elevate Your Advertising Strategy?
            </h2>
            <p className="text-black mb-6 text-sm">
              Fill out the form below with your details and questions about our
              innovative media buying platform. We will review your inquiry and
              get back to you promptly with the information you need to
              transform your ad campaigns.
            </p>
            <h3 className="text-xl font-semibold text-black mb-4">
              Book your free consultation
            </h3>

            <div className="bg-transparent border border-gray-300 rounded-lg p-6">
              <form>
                <div className="mb-4">
                  <label
                    className="block text-left text-gray-700 font-medium"
                    htmlFor="name"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-left text-gray-700 font-medium"
                    htmlFor="email"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-left text-gray-700 font-medium"
                    htmlFor="user-type"
                  >
                    I am a
                  </label>
                  <select
                    id="user-type"
                    className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option>Advertiser</option>
                    <option>Media House</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-left text-gray-700 font-medium"
                    htmlFor="message"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Message"
                    className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F20519] text-white h-10 flex items-center justify-center py-3 border border-red-500 rounded-md font-semibold hover:bg-red-700 transition"
                >
                  Send message
                </button>
              </form>
            </div>

            <p className="mt-6 text-black text-sm font-bold">
              Don’t wait—take the first step toward a smarter, more efficient
              advertising experience with Adflow!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
