"use client";

import MainNav from "@/components/MainNav";
import Link from "next/link";
import Footer from "@/components/Footer"; 
import React, { useEffect, useState, useRef } from "react";
import CallToAction from "@/components/CallToAction";

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
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          <img
            src="images/adflow_dashboard.png"
            alt="Dashboard screenshot showing analytics and data"
            className="rounded-lg"
          />
          <div className="">
            <h3 className="text-gray-500 uppercase text-center text-sm font-semibold mb-2">
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

<CallToAction />

      <Footer />
    </>
  );
}
