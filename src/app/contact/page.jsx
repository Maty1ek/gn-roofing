"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { phoneNumber } from "../../lib/phoneNumber";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-gray-700 flex items-center overflow-hidden justify-center text-gray-400">
          <img src="contact-imgs.png" alt="" className="w-full" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get Your Free Quote Today</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible. For urgent matters, please call us directly.
              </p>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you! We've received your message and will contact you
                  soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                    placeholder="0400 000 000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition"
                  >
                    <option value="">Select a service...</option>
                    <option value="repair">Roof Repairs</option>
                    <option value="replacement">Roof Replacement</option>
                    <option value="restoration">Roof Restoration</option>
                    <option value="gutter">Gutter Services</option>
                    <option value="painting">Roof Painting</option>
                    <option value="cleaning">Pressure Cleaning</option>
                    <option value="emergency">Emergency Roofing</option>
                    <option value="inspection">Roof Inspection</option>
                    <option value="installation">New Installation</option>
                    <option value="asbestos">Asbestos Removal</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none transition resize-none"
                    placeholder="Tell us about your roofing needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:1300000000"
                      className="text-blue-600 hover:underline text-lg"
                    >
                      {phoneNumber}
                    </a>
                    <p className="text-sm text-gray-600">
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:info@roofing.com.au"
                      className="text-blue-600 hover:underline"
                    >
                      info@roofing.com.au
                    </a>
                    <p className="text-sm text-gray-600">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-700">Sydney, NSW</p>
                    <p className="text-sm text-gray-600">
                      Servicing all Sydney areas
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">
                      Monday - Friday: 7:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-700">Saturday: 8:00 AM - 4:00 PM</p>
                    <p className="text-gray-700">
                      Sunday: Emergency calls only
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-lg mb-3">Prefer WhatsApp?</h3>
                <p className="text-gray-600 mb-4">
                  Send us a message on WhatsApp for quick responses
                </p>
                <a
                  href="https://wa.me/61400000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-gray-300 rounded-lg flex items-center overflow-hidden justify-center text-gray-500">
                <img src="maps.png" alt="" className="w-full"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
