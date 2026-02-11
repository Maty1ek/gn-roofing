import { Shield, Users, Award, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-gray-700 flex items-center overflow-hidden justify-center text-gray-400">
          <img src="/gn-roof17.jpg" alt="" className="w-full" />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Your Trusted Roofing Partner in Sydney</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Experience You Can Trust
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We specialize in high-quality roof restoration, repairs, and
                maintenance for residential and commercial properties. With a
                strong focus on durability, safety, and customer satisfaction,
                our team delivers reliable workmanship using premium materials.
                Whether your roof needs a full restoration or minor repairs, GN
                Roof Restoration is here to protect your property with
                professional service you can count on.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our team of licensed and insured professionals specializes in
                all aspects of roofing, from minor repairs to complete
                replacements. We use only the highest quality materials and
                adhere to strict safety standards on every job.
              </p>
              <p className="text-lg text-gray-700">
                We're committed to WHS compliance and maintaining the highest
                safety standards. Our local knowledge and expertise ensure that
                your roof is built to withstand Sydney's unique climate
                conditions.
              </p>
            </div>
            <div className="h-96 bg-gray-300 rounded-lg flex items-center overflow-hidden justify-center text-gray-500">
              <img src="/gn-roof33.jpg" alt="" className="w-full" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-lg">Jobs Completed</div>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Licensed & Insured</div>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">5.0</div>
              <div className="text-lg">Star Rating</div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={40} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed and comprehensively insured for your peace of
                mind
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={40} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Skilled professionals with years of roofing experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={40} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Materials</h3>
              <p className="text-gray-600">
                We use only premium materials from trusted suppliers
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={40} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Local Knowledge</h3>
              <p className="text-gray-600">
                Deep understanding of Sydney's climate and building requirements
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Licenses & Certifications
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="w-40 h-32 bg-gray-200 flex items-center justify-center text-xs text-gray-500 border border-gray-300">
                [LICENSE BADGE 1]
              </div>
              <div className="w-40 h-32 bg-gray-200 flex items-center justify-center text-xs text-gray-500 border border-gray-300">
                [INSURANCE BADGE]
              </div>
              <div className="w-40 h-32 bg-gray-200 flex items-center justify-center text-xs text-gray-500 border border-gray-300">
                [WHS COMPLIANCE]
              </div>
              <div className="w-40 h-32 bg-gray-200 flex items-center justify-center text-xs text-gray-500 border border-gray-300">
                [CERTIFICATION BADGE]
              </div>
            </div>
          </div>

          {/* Service Area Map */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Service Areas
            </h2>
            <div className="h-96   rounded-lg flex items-center justify-center text-gray-500">
              <img src="/maps.png" alt="" className="h-full"/>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Proudly serving Sydney, Western Sydney, North Shore, Eastern
              Suburbs, and surrounding areas
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
