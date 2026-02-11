import {
  Phone,
  CheckCircle,
  Star,
  Wrench,
  Home as HomeIcon,
  Droplet,
  Paintbrush,
  Wind,
  AlertCircle,
  Search,
  Hammer,
  Shield,
} from "lucide-react";
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Header from "../components/Header";
import TwoItemSlider from "../components/ImageSlider";
import { phoneNumber } from "../lib/phoneNumber";

export default function HomePage() {
  const services = [
    {
      icon: Wrench,
      title: "Roof Repairs",
      description: "Fast, reliable repairs for all roof types",
    },
    {
      icon: HomeIcon,
      title: "Roof Replacement",
      description: "Complete roof replacement with quality materials",
    },
    {
      icon: Paintbrush,
      title: "Roof Restorations",
      description: "Restore your roof to like-new condition",
    },
    {
      icon: Droplet,
      title: "Gutter Services",
      description: "Cleaning, repairs, and replacement",
    },
    {
      icon: Paintbrush,
      title: "Roof Painting",
      description: "Professional roof painting services",
    },
    {
      icon: Wind,
      title: "Pressure Cleaning",
      description: "Moss removal and pressure washing",
    },
    {
      icon: AlertCircle,
      title: "Emergency Roofing",
      description: "24/7 emergency response available",
    },
    {
      icon: Search,
      title: "Roof Inspections",
      description: "Thorough inspections and reports",
    },
    {
      icon: Hammer,
      title: "New Installations",
      description: "New roof installations for all properties",
    },
    {
      icon: Shield,
      title: "Asbestos Removal",
      description: "Safe removal and compliance",
    },
  ];

  const benefits = [
    "Fully Licensed & Insured",
    "Fast Response Times",
    "Competitive Pricing",
    "Satisfaction Guaranteed",
    "24/7 Emergency Services",
    "Quality Materials Only",
  ];

  const testimonials = [
    {
      name: "John Smith",
      rating: 5,
      text: "Excellent service! They fixed our roof leak quickly and professionally.",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Very impressed with the quality of work. Highly recommend!",
    },
    {
      name: "Michael Brown",
      rating: 5,
      text: "Great communication and fair pricing. Will use again.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 w-full overflow-hidden bg-center bg-gray-300 flex items-center justify-center text-gray-500">
          {/* <div className="text-center"> */}
          <img src="roof-hero-bg.avif" alt="" className="w-full" />
          {/* </div> */}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Trusted Roofing Experts in Sydney
          </h1>
          <p className="text-xl md:text-2xl mb-2">
            Repairs, Replacements & Restorations
          </p>
          <p className="text-lg mb-8 text-gray-200">
            Quality materials, fast service, licensed & insured
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1300000000"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition shadow-xl flex items-center justify-center space-x-2"
            >
              <Phone size={24} />
              <span>Call Now: {phoneNumber}</span>
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-xl"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mini testimonials */}
          <div className="mt-8 flex items-center justify-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm">Rated 5.0 by 140+ customers</span>
          </div>
        </div>
      </section>

      {/* Trusted Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Trusted by Sydney Homeowners
          </h2>

          {/* Reviews Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>

          {/* Partner Logos */}
          {/* <div className="text-center">
            <p className="text-sm text-gray-600 mb-4 font-semibold">
              TRUSTED PARTNERS & MATERIALS
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="w-32 h-20 bg-gray-200 flex items-center justify-center text-xs text-gray-500 border border-gray-300">
                [COLORBOND LOGO]
              </div>
              <div className="w-32 h-20 bg-gray-200 flex items-center justify-center text-xs text-gray-500 border border-gray-300">
                [LYSAGHT LOGO]
              </div>
              <div className="w-32 h-20 bg-gray-200 flex items-center justify-center text-xs text-gray-500 border border-gray-300">
                [PARTNER LOGO]
              </div>
              <div className="w-32 h-20 bg-gray-200 flex items-center justify-center text-xs text-gray-500 border border-gray-300">
                [TRUSTINDEX BADGE]
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What We Do – Roofing Solutions Tailored for You
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive roofing services for residential and commercial
              properties
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <a
                  key={index}
                  href="/services"
                  className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:border-blue-600 hover:shadow-lg transition group"
                >
                  <Icon
                    size={40}
                    className="text-blue-600 mb-4 group-hover:scale-110 transition"
                  />
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </a>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href="/services"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle size={24} className="flex-shrink-0 mt-1" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Recent Projects
            </h2>
            <p className="text-lg text-gray-600">See the quality of our work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                "imageBefore": "/gn-roof4.jpg",
                "imageAfter": "gn-roof5.jpg",
              },
              {
                "imageBefore": "/gn-roof25.jpg",
                "imageAfter": "/gn-roof26.jpg",
              },
              {
                "imageBefore": "/gn-roof27.jpg",
                "imageAfter": "/gn-roof28.jpg",
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="h-64 bg-gray-300 flex overflow-hidden items-center justify-center text-gray-500">
                  <TwoItemSlider
                    images={[item.imageBefore, item.imageAfter]}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">
                    Project Title {index}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Brief description of the roofing project
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/projects"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Get a free quote today or schedule a free roof inspection
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1300000000"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
            >
              <Phone size={24} />
              <span>Call: {phoneNumber}</span>
            </a>
            <a
              href="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition"
            >
              Send Us Your Roof Photo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
