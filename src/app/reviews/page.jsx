import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "John Smith",
      location: "Parramatta",
      rating: 5,
      date: "January 2026",
      text: "Excellent service from start to finish. They fixed our roof leak quickly and professionally. The team was courteous and cleaned up thoroughly after the job. Highly recommend!",
      verified: true,
    },
    {
      name: "Sarah Johnson",
      location: "North Shore",
      rating: 5,
      date: "December 2025",
      text: "Very impressed with the quality of work on our roof replacement. The team was professional, punctual, and the price was very competitive. Our new Colorbond roof looks fantastic!",
      verified: true,
    },
    {
      name: "Michael Brown",
      location: "Western Sydney",
      rating: 5,
      date: "November 2025",
      text: "Great communication throughout the entire process. They provided a detailed quote, stuck to the timeline, and the workmanship was top-notch. Will definitely use again.",
      verified: true,
    },
    {
      name: "Emma Wilson",
      location: "Eastern Suburbs",
      rating: 5,
      date: "November 2025",
      text: "Emergency roof repair after a storm. They came out the same day and fixed the damage quickly. Very grateful for their fast response and professional service.",
      verified: true,
    },
    {
      name: "David Lee",
      location: "Blacktown",
      rating: 5,
      date: "October 2025",
      text: "Had our roof restored and it looks brand new! The team was friendly, efficient, and very knowledgeable. Fair pricing and excellent results.",
      verified: true,
    },
    {
      name: "Lisa Chen",
      location: "Sutherland Shire",
      rating: 5,
      date: "October 2025",
      text: "Professional roof inspection service. They provided a comprehensive report with photos and clear recommendations. No pressure sales, just honest advice.",
      verified: true,
    },
    {
      name: "James Taylor",
      location: "Liverpool",
      rating: 5,
      date: "September 2025",
      text: "Fantastic job on our gutter replacement. The team was respectful of our property and completed the work efficiently. Very happy with the outcome.",
      verified: true,
    },
    {
      name: "Rachel Green",
      location: "Penrith",
      rating: 5,
      date: "September 2025",
      text: "Best roofing company we've dealt with. From the initial quote to completion, everything was handled professionally. The roof painting looks amazing!",
      verified: true,
    },
    {
      name: "Tom Anderson",
      location: "Sydney CBD",
      rating: 5,
      date: "August 2025",
      text: "Commercial roof repair for our office building. Minimal disruption to our business and excellent quality work. Would highly recommend for commercial projects.",
      verified: true,
    },
  ];

  const stats = {
    totalReviews: 145,
    averageRating: 5.0,
    fiveStarPercentage: 98,
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center overflow-hidden text-gray-400">
          <img src="/reviews-bg.jpg" alt="" className="w-full"/>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl">See What Our Customers Say About Us</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">
                {stats.totalReviews}+
              </div>
              <div className="text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <span className="text-5xl font-bold mr-2">
                  {stats.averageRating}
                </span>
                <Star size={40} className="fill-yellow-400 text-yellow-400" />
              </div>
              <div className="text-lg">Average Rating</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">
                {stats.fiveStarPercentage}%
              </div>
              <div className="text-lg">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real reviews from real customers
            </p>
            {/* <div className="mt-4 inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
              ✓ Verified by Trustindex
            </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-semibold">
                      ✓ Verified
                    </span>
                  )}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.location}</p>
                  <p className="text-xs text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Testimonials Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Video Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center text-gray-500">
                [VIDEO TESTIMONIAL 1]
              </div>
              <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center text-gray-500">
                [VIDEO TESTIMONIAL 2]
              </div>
            </div>
          </div>

          {/* Google Reviews Badge */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Find Us On Google
            </h3>
            <a href="https://www.google.com/maps/place/GN+Roof+Restoration+Sydney+Pty+LTD/@-33.7590248,150.6129723,11z/data=!4m18!1m9!3m8!1s0x6b129fcda0b171a7:0xed87ca7ed0b62082!2sGN+Roof+Restoration+Sydney+Pty+LTD!8m2!3d-33.7590248!4d150.9178429!9m1!1b1!16s%2Fg%2F11t5_0vrz1!3m7!1s0x6b129fcda0b171a7:0xed87ca7ed0b62082!8m2!3d-33.7590248!4d150.9178429!9m1!1b1!16s%2Fg%2F11t5_0vrz1?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
              <div className="inline-block bg-white border-2 border-gray-200 rounded-lg p-8">
              <div className="w-48 h-48  mx-auto mb-4 flex items-center justify-center text-gray-500">
                <img src="google-logo.webp" alt="" className="w-[150px]"/>
              </div>
              <p className="text-gray-700 font-semibold">
                Read more reviews on Google
              </p>
            </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
