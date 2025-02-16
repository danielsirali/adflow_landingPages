"use client"
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function Nav() {
    return (
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
    );
}