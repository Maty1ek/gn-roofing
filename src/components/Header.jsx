"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { phoneNumber } from "../lib/phoneNumber";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="flex items-center">
              {/* <div className="w-48 h-12 bg-gray-200 flex items-center justify-center text-xs text-gray-500 border-2 border-dashed border-gray-400">
                [LOGO HERE]
              </div> */}
              <img src="/gn-roof-logo-main.png" alt="" className="w-[150px] h-full"/>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                About
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Services
              </a>
              <a
                href="/projects"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Projects
              </a>
              <a
                href="/reviews"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Reviews
              </a>
              <a
                href="/faq"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                FAQs
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                Contact
              </a>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:1300000000"
                className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition"
              >
                <Phone size={20} />
                <span>{phoneNumber}</span>
              </a>
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
              >
                Get Free Quote
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-4 space-y-3">
              <a
                href="/"
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                About
              </a>
              <a
                href="/services"
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Services
              </a>
              <a
                href="/projects"
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Projects
              </a>
              <a
                href="/reviews"
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Reviews
              </a>
              <a
                href="/faq"
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                FAQs
              </a>
              <a
                href="/contact"
                className="block text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                Contact
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center space-x-2 text-blue-600 font-semibold py-2"
              >
                <Phone size={20} />
                {phoneNumber}
              </a>
              <a
                href="/contact"
                className="block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition"
              >
                Get Free Quote
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile sticky phone button */}
      <a
        href={`tel:${phoneNumber}`}
        className="lg:hidden fixed bottom-20 right-4 bg-blue-600 text-white p-4 rounded-full shadow-2xl z-40 hover:bg-blue-700 transition"
      >
        <Phone size={24} />
      </a>

      {/* Floating CTA button on scroll */}
      <a
        href="/contact"
        className="hidden lg:block fixed bottom-8 right-8 bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold shadow-2xl z-40 hover:bg-blue-700 transition"
      >
        Get Free Quote
      </a>
    </>
  );
}
