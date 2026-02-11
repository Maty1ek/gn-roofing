"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlider from "../../components/ImageSlider";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Residential Roof Replacement",
      category: "replacement",
      location: "Parramatta, NSW",
      images: ['/gn-roof4.jpg', '/gn-roof5.jpg']
    },
    {
      id: 2,
      title: "Commercial Roof Repair",
      category: "repair",
      location: "Sydney CBD",
      images: ['/gn-roof7.jpg', '/gn-roof8.jpg', '/gn-roof9.jpg']

    },
    {
      id: 3,
      title: "Heritage Roof Restoration",
      category: "restoration",
      location: "North Shore",
      images: ['/gn-roof20.jpg', '/gn-roof21.jpg']

    },
    {
      id: 4,
      title: "New Build Installation",
      category: "installation",
      location: "Western Sydney",
      images: ['/gn-roof22.jpg', '/gn-roof23.jpg']

    },
    {
      id: 5,
      title: "Storm Damage Repair",
      category: "repair",
      location: "Eastern Suburbs",
      images: ['/gn-roof24.jpg', '/gn-roof25.jpg', '/gn-roof26.jpg']

    },
    {
      id: 6,
      title: "Colorbond Roof Replacement",
      category: "replacement",
      location: "Blacktown",
      images: ['/gn-roof27.jpg', '/gn-roof28.jpg', '/gn-roof31.jpg']

    },
    {
      id: 7,
      title: "Tile Roof Restoration",
      category: "restoration",
      location: "Sutherland Shire",
      images: ['/gn-roof1.jpg', '/gn-roof2.jpg', '/gn-roof3.jpg']

    },
    {
      id: 8,
      title: "Industrial Roof Installation",
      category: "installation",
      location: "Liverpool",
      images: ['/gn-roof13.jpg', '/gn-roof14.jpg', '/gn-roof17.jpg', '/gn-roof18.jpg']

    },
    {
      id: 9,
      title: "Gutter Replacement Project",
      category: "repair",
      location: "Penrith",
      images: ['/gn-roof10.jpg', '/gn-roof11.jpg', '/gn-roof12.jpg']

    },
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "repair", label: "Repairs" },
    { value: "replacement", label: "Replacements" },
    { value: "restoration", label: "Restorations" },
    { value: "installation", label: "New Installations" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-gray-400">
          <img src="/gn-roof1.jpg" alt="" className="w-full"/>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl">See the Quality of Our Work</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  filter === cat.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group"
              >
                {/* Before/After Placeholder */}
                <div className="relative h-64 bg-gray-300 overflow-hidden flex items-center justify-center text-gray-500">
                  {/* <div className="text-center overflow-hidden"> */}
                    <ImageSlider images={project.images}/>
                  {/* </div> */}
                </div>

                <div className="p-6">
                  <div className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {project.category.toUpperCase()}
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    📍 {project.location}
                  </p>
                  <p className="text-gray-700 text-sm">
                    Professional roofing work completed to the highest
                    standards. Quality materials and expert craftsmanship.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Featured Case Study
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500">
                <ImageSlider images={['/gn-roof4.jpg', '/gn-roof5.jpg']}/>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Complete Roof Restoration - Heritage Home
                </h3>
                <p className="text-gray-700 mb-4">
                  This beautiful heritage home in Sydney's North Shore required
                  a complete roof restoration. The original terracotta tiles
                  were carefully restored, damaged sections replaced, and the
                  entire roof was repointed and sealed.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-700">
                    <strong>Location:</strong> North Shore, Sydney
                  </p>
                  <p className="text-gray-700">
                    <strong>Duration:</strong> 3 weeks
                  </p>
                  <p className="text-gray-700">
                    <strong>Services:</strong> Restoration, Tile Replacement,
                    Repointing, Sealing
                  </p>
                </div>
                <p className="text-gray-700 italic">
                  "The team did an amazing job restoring our heritage roof. They
                  were professional, respectful of our property, and the results
                  exceeded our expectations." - Homeowner
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
