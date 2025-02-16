"use client";

import Nav from "@/components/Nav";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import MainCallToAction from "@/components/MainCallToAction";

const Home = () => {
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
    <div className="p-8">
      <Nav />
      <img
        src="/images/decore.png"
        alt="Decorative Image"
        className="absolute right-0 top-0 z-0 object-cover hidden md:block"
        style={{
          width: "800px",
          height: "800px",
          marginLeft: "10px",
          marginTop: "0px",
        }}
      />

      <img
        src="/images/decore.png"
        alt="Decorative Image"
        className="absolute right-0 top-0 z-0 object-cover"
        style={{
          width: "400px",
          height: "400px",
          marginLeft: "0px",
          marginTop: "0px",
        }}
      />

      <section className="relative">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-6">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold leading-tight text-black text-center md:text-left">
              Run <span className="text-red-500">ads</span> your <br />
              <span className="text-red-500">audience</span> cares about
            </h1>
            <p className="mt-4 text-gray-600 text-sm">
              Adflow is your all-in-one marketplace for buying and selling
              airtime on radio and television. Whether you're an advertiser
              eager to connect with your ideal audience or a media house looking
              to optimize your inventory, Adflow simplifies the process—helping
              you focus on what truly matters: reaching your target faster and
              smarter.
            </p>
            <button className="mt-6 h-10 bg-red-500 text-sm text-white flex items-center justify-center border border-red-600 px-6 py-3 rounded-md font-bold hover:bg-red-600 mx-auto lg:mx-0">
              Get Started
            </button>
          </div>

          <div className="md:w-1/2 relative md:mt-0">
            <div className="right-0 w-full bg-red-500"></div>
            <img
              src="/images/adflow_pic_5.png"
              alt="Woman holding a retro TV"
              className="h-98 w-86 sm:24"
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
      <MainCallToAction />

      <Footer />
    </div>
  );
};

export default Home;
