import { Phone, Mail, MapPin, Star } from "lucide-react";
import { phoneNumber } from "../lib/phoneNumber";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="w-40 h-10 bg-gray-700 flex items-center justify-center text-xs text-gray-400 border-2 border-dashed border-gray-600 mb-4">
              <img src="/gn-roof-logo-main.png" alt="" />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Trusted roofing experts in Sydney. Quality materials, fast
              service, licensed & insured.
            </p>
            <div className="flex items-center space-x-1 mb-2">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-gray-400 ml-2">5.0 on Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-gray-400 hover:text-white transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="text-gray-400 hover:text-white transition"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Roof Repairs</li>
              <li>Roof Replacement</li>
              <li>Roof Restorations</li>
              <li>Gutter Services</li>
              <li>Emergency Roofing</li>
              <li>Roof Inspections</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:1300000000"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {phoneNumber}
                  </a>
                  <p className="text-xs text-gray-500">
                    24/7 Emergency Service
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@roofing.com.au"
                  className="text-gray-400 hover:text-white transition"
                >
                  info@roofing.com.au
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">Sydney, NSW</span>
              </li>
            </ul>

            {/* License Badges */}
            <div className="mt-6 space-y-2">
              <div className="w-32 h-12 bg-gray-700 flex items-center justify-center text-xs text-gray-400 border border-gray-600">
                [LICENSE BADGE]
              </div>
              <div className="w-32 h-12 bg-gray-700 flex items-center justify-center text-xs text-gray-400 border border-gray-600">
                [INSURANCE BADGE]
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 Sydney Roofing Experts. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span>|</span>
            <span>Designed by [Your Name]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
