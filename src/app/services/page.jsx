import {
  Wrench,
  Home as HomeIcon,
  Droplet,
  Paintbrush,
  Wind,
  AlertCircle,
  Search,
  Hammer,
  Shield,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { phoneNumber } from "../../lib/phoneNumber";

export default function ServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "Roof Repairs",
      description:
        "Fast, reliable repairs for leaks, damaged tiles, and storm damage. We fix all roof types including tile, metal, and Colorbond.",
      features: [
        "Emergency repairs",
        "Leak detection",
        "Tile replacement",
        "Storm damage repair",
      ],
    },
    {
      icon: HomeIcon,
      title: "Roof Replacement",
      description:
        "Complete roof replacement using premium materials. We handle everything from removal to installation.",
      features: [
        "Full roof removal",
        "New installation",
        "Material selection",
        "Warranty included",
      ],
    },
    {
      icon: Paintbrush,
      title: "Roof Restorations",
      description:
        "Restore your roof to like-new condition. Includes cleaning, repairs, painting, and sealing.",
      features: [
        "Pressure cleaning",
        "Repairs & repointing",
        "Roof painting",
        "Protective coating",
      ],
    },
    {
      icon: Droplet,
      title: "Gutter Cleaning & Replacement",
      description:
        "Keep your gutters flowing freely. We clean, repair, and replace gutters and downpipes.",
      features: [
        "Gutter cleaning",
        "Gutter repairs",
        "New gutter installation",
        "Downpipe replacement",
      ],
    },
    {
      icon: Paintbrush,
      title: "Roof Painting",
      description:
        "Professional roof painting to protect and beautify your home. Heat-reflective coatings available.",
      features: [
        "Surface preparation",
        "Premium paints",
        "Heat-reflective options",
        "Long-lasting finish",
      ],
    },
    {
      icon: Wind,
      title: "Moss & Pressure Cleaning",
      description:
        "Remove moss, algae, and dirt buildup. Pressure cleaning restores your roof's appearance.",
      features: [
        "Moss removal",
        "Pressure washing",
        "Algae treatment",
        "Surface sanitization",
      ],
    },
    {
      icon: AlertCircle,
      title: "Emergency Roofing",
      description:
        "24/7 emergency response for urgent roof repairs. We're here when you need us most.",
      features: [
        "24/7 availability",
        "Rapid response",
        "Temporary repairs",
        "Storm damage service",
      ],
    },
    {
      icon: Search,
      title: "Roof Inspections",
      description:
        "Thorough roof inspections with detailed reports. Identify issues before they become expensive problems.",
      features: [
        "Visual inspection",
        "Detailed report",
        "Photo documentation",
        "Repair recommendations",
      ],
    },
    {
      icon: Hammer,
      title: "New Roof Installations",
      description:
        "New roof installations for extensions, new builds, and renovations. Expert installation guaranteed.",
      features: [
        "New construction",
        "Extensions",
        "Material consultation",
        "Professional installation",
      ],
    },
    {
      icon: Shield,
      title: "Asbestos Removal & Safety",
      description:
        "Safe asbestos removal and disposal. Fully licensed and compliant with all safety regulations.",
      features: [
        "Licensed removal",
        "Safe disposal",
        "Compliance certified",
        "Replacement options",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex overflow-hidden items-center justify-center bg-gray-900">
        <div className="absolute bottom-[250px] inset-0 bg-gray-700 flex items-center justify-center text-gray-400 ">
          <img src="gn-roof17.jpg" alt="" className="w-full"/>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">
            Comprehensive Roofing Solutions for Every Need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From minor repairs to complete roof replacements, we offer a full
              range of professional roofing services to keep your property
              protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 hover:shadow-xl transition"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-4 rounded-lg flex-shrink-0">
                      <Icon size={32} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-gray-600"
                          >
                            <CheckCircle
                              size={18}
                              className="text-blue-600 flex-shrink-0"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Roofing Service?</h2>
            <p className="text-xl mb-8">
              Get a free quote or schedule an inspection today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1300000000"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
              >
                Call: {phoneNumber}
              </a>
              <a
                href="/contact"
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition"
              >
                Request Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
