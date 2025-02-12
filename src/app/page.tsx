"use client";


import Nav from "@/components/Nav";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

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
    <div className="p-8">
      <Nav />
      <img
        src="/images/decore.png"
        alt="Decorative Image"
        className="absolute right-0 top-0 z-0 object-cover h-32 w-32 sm:h-48 sm:w-48 lg:h-full lg:w-auto"
        style={{ marginLeft: "10px", marginTop: "0px" }}
      />

      <section className="relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold leading-tight text-black">
              Run <span className="text-red-500">ads</span> your <br />
              <span className="text-red-500"> audience</span> cares <br /> about
            </h1>
            <p className="mt-4 text-gray-600">
              Adflow makes buying airtime on radio and television more seamless
              than ever, allowing you to focus on reaching your target faster.
            </p>
            <button className="mt-6 bg-red-500 text-white border border-red-600 px-6 py-3 rounded-md font-medium hover:bg-red-600">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 relative md:mt-0">
            <div className="right-0 w-full bg-red-500"></div>
            <img
              src="/images/adflow_pic_5.png"
              alt="Woman holding a retro TV"
              className="h-98 w-86"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Your All-In-One Ad Slot Marketplace
          </h2>
          <div className="grid md:grid-cols-3 gap-12 mt-12 items-center">
            <div className="flex flex-col items-center">
              <img
                src="/images/centralized_platform.png"
                alt="Centralized Platform"
                className="h-98 w-86"
              />
              <h3 className="mt-4 font-semibold text-lg text-black">
                Centralized Platform
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                No more juggling between multiple contacts—manage all bookings
                in one place.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/real_time_updates.png"
                alt="Real-Time Updates"
                className="h-98 w-86"
              />
              <h3 className="mt-4 font-semibold text-lg text-black">
                Real-Time Updates
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                See slot availability instantly, ensuring timely campaign
                placements.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/data_driven_decisions.png"
                alt="Data-Driven Decisions"
                className="h-98 w-86"
              />
              <h3 className="mt-4 font-semibold text-lg text-black">
                Data-Driven Decisions
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Access performance analytics to optimize ad spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          <div className="">
            <img
              src="/images/adflow_dashboard.png"
              alt="Adflow dashboard interface showcasing analytics and booking management."
              className="object-cover rounded-lg w-full"
            />
          </div>
          <div className="max-w-lg">
            <p className="text-gray-500 uppercase font-semibold text-sm md:text-center">
              Overview
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-center">
              <span className="text-red-500">About</span> The Platform
            </h2>
            <p className="mt-4 text-gray-600 text-md md:text-left">
              Adflow is a cutting-edge, centralized platform designed to
              revolutionize how advertisers and media houses in Tanzania
              connect, book, and manage ad slots. It bridges the gap between
              brands looking for the perfect advertising opportunities and media
              houses seeking to maximize the value of their ad inventory.
            </p>
            <p className="mt-4 text-gray-600 text-md md:text-left">
              With Adflow, advertisers can effortlessly discover, compare, and
              book available ad slots across multiple media channels—TV, radio,
              print, digital, and outdoor—all from one intuitive dashboard.
              Media houses, on the other hand, gain a powerful tool to manage
              bookings, optimize pricing, and track ad performance in real time.
            </p>
          </div>
        </div>

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
      </div>

      <section className="max-w-7xl mx-auto px-2">
        <h3 className="text-gray-500 font-semibold text-sm">Testimonials</h3>
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2">
              Trusted By Leading <br /> Advertisers And Media <br /> Houses
            </h2>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 relative z-10">
              <div className="flex items-start">
                <img
                  src="/images/person_image.png"
                  alt="Smiling man profile picture"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white shadow-lg -mt-8"
                />
              </div>
              <p className="text-gray-600 text-lg mt-2">
                “Adflow transformed how we manage our ad inventory— bookings
                have doubled, and revenue is up by 30%!”
              </p>
              <div className="mt-4">
                <p className="font-semibold text-gray-900">John Doe</p>
                <p className="text-gray-500 text-sm">
                  Marketing Director at XYZ Media
                </p>
              </div>
            </div>

            <div className="absolute top-20 left-6 md:left-10 w-full md:w-11/12 bg-white shadow-md rounded-lg p-6 opacity-50">
              <p className="font-semibold text-gray-900">Chris Thomas</p>
              <p className="text-gray-500 text-sm">CEO of Red Button</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16">
          <div className="flex justify-center">
            <img
              src="/images/clients/axon_airlines.png"
              alt="Axon Airlines Logo"
              className="h-22"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/images/clients/jetstar.png"
              alt="Jetstar Logo"
              className="h-22"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/images/clients/expedia.png"
              alt="Expedia Logo"
              className="h-22"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/images/clients/qantas.png"
              alt="Qantas Logo"
              className="h-22"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="/images/clients/italia.png"
              alt="Alitalia Logo"
              className="h-22"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 py-10">
        <div className="relative bg-red-100 rounded-r-lg rounded-tl-[10rem] rounded-bl-lg p-16 flex flex-col items-center text-center shadow-lg overflow-hidden">
          {/* Background Circles */}
          <div className="absolute inset-0">
            {/* Left-side overlapping circles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`left-circle-${i}`}
                className="absolute"
                style={{
                  top: `${10 + i * 5}px`,
                  left: `${10 + i * 5}px`,
                  width: `${180 - i * 20}px`,
                  height: `${180 - i * 20}px`,
                  borderRadius: "50%",
                  border: "1px solid rgba(220, 38, 38, 0.3)", // Tailwind `border-red-300 opacity-30`
                }}
              ></div>
            ))}

            {/* Right-side overlapping circles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`right-circle-${i}`}
                className="absolute"
                style={{
                  bottom: `${10 + i * 5}px`,
                  right: `${10 + i * 5}px`,
                  width: `${180 - i * 20}px`,
                  height: `${180 - i * 20}px`,
                  borderRadius: "50%",
                  border: "1px solid rgba(220, 38, 38, 0.3)",
                }}
              ></div>
            ))}
          </div>

          {/* Heading */}
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 max-w-lg leading-relaxed">
            Subscribe to get information, latest news and other interesting
            offers about Adflow.
          </h2>

          {/* Input & Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
            <div className="relative w-full flex items-center">
              <span className="absolute left-4 text-gray-500">
                <i className="bx bx-envelope"></i>
              </span>
              <input
                type="email"
                placeholder="Your email"
                className="w-full py-2 pl-12 pr-4 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button className="bg-red-600 text-white py-2 px-8 rounded-lg font-semibold border border-red-700 hover:bg-red-700 transition">
              Subscribe
            </button>
          </div>

          {/* Floating Send Icon */}
          <div className="absolute top-0 right-0 bg-red-600 w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
            <img
              className="w-8 h-8 object-contain"
              src="/images/kite_image.png"
              alt="Send Icon"
            />
          </div>
        </div>
      </section>

      <footer className="relative bg-white py-18 mt-16 px-6 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start relative">
          <div>
            <img
              src="/images/adflow_logo.png"
              alt="Adflow Logo"
              className="w-auto h-auto p-4 object-cover"
            />
            <p className="text-gray-500 mt-2 text-sm">
              Making your media buying <br></br>experience simpler.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 mt-6 md:mt-0 space-x-16">
            <div>
              <h3 className="font-semibold text-black">Company</h3>
              <ul className="mt-2 space-y-2 text-black text-sm">
                <li>
                  <Link href="#" className="text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-black">
                    Mobile
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black">Contact</h3>
              <ul className="mt-2 space-y-2 text-gray-500 text-sm">
                <li>
                  <Link href="#" className="text-black">
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-black">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-black">
                    Affiliates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-black">More</h3>
              <ul className="mt-2 space-y-2 text-gray-500 text-sm">
                <li>
                  <Link href="#" className="text-black">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-black">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-600 hover:text-black transition"
            >
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-600 hover:text-black transition"
            >
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link
              href="#"
              className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-600 hover:text-black transition"
            >
              <i className="bx bxl-twitter"></i>
            </Link>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          Copyright © 2025, All rights reserved. Adflow
        </div>
        <img
          src="/images/color_background.png"
          alt="Red gradient background"
          className="absolute bottom-0 right-0 top-0 w-80 h-96 pointer-events-none z-10 opacity-80"
        />
      </footer>
    </div>
  );
};

export default Home;
