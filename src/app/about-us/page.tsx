"use client";

import MainNav from "@/components/MainNav";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function AboutUs() {
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
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <img
            src="images/adflow_dashboard.png"
            alt="Dashboard screenshot showing analytics and data"
            className="rounded-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-gray-500 uppercase text-sm font-semibold mb-2">
              About
            </h3>
            <h1 className="text-4xl text-center font-extrabold text-gray-900 mb-4">
              Revolutionizing Media Buying
            </h1>
            <p className="text-gray-700 mb-4 text-sm">
              Adflow is a pioneering, all-in-one marketplace that transforms the
              way advertisers and media houses connect, book, and manage ad
              slots. Our platform bridges the gap between brands seeking premium
              advertising opportunities and media houses determined to maximize
              the value of their inventory.
            </p>
            <h4 className="text-lg text-black font-semibold mb-2">
              What We Offer:
            </h4>
            <ul className="text-gray-700 space-y-2  list-inside text-sm">
              <li>
                <strong>Seamless Integration:</strong> Experience a streamlined
                process that unifies ad buying and management in one intuitive
                space.
              </li>
              <li>
                <strong>Empowerment Through Technology:</strong> Leverage
                real-time data and analytics to make informed decisions that
                drive results.
              </li>
              <li>
                <strong>A Win-Win Ecosystem:</strong> Advertisers gain direct
                access to ideal ad opportunities, while media houses can
                optimize their bookings and pricing strategies—ensuring every
                campaign is set up for success.
              </li>
            </ul>
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
