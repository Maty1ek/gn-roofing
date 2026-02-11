"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { phoneNumber } from "../../lib/phoneNumber";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of roofing services including roof repairs, replacements, restorations, gutter services, roof painting, pressure cleaning, emergency roofing, roof inspections, new installations, and asbestos removal. We work on both residential and commercial properties.",
    },
    {
      question: "Do you offer free quotes?",
      answer:
        "Yes! We provide free, no-obligation quotes for all our services. Simply contact us by phone or fill out our online form, and we'll schedule a convenient time to assess your roofing needs and provide a detailed quote.",
    },
    {
      question: "How long will repairs take?",
      answer:
        "The duration depends on the extent of the damage. Minor repairs can often be completed in a few hours, while more extensive work may take 1-3 days. We'll provide you with a clear timeline during the quote process and keep you informed throughout the project.",
    },
    {
      question: "What roofing materials do you use?",
      answer:
        "We use only premium quality materials from trusted suppliers including COLORBOND steel, Lysaght products, terracotta and concrete tiles, and other industry-leading brands. We can help you choose the best material for your specific needs and budget.",
    },
    {
      question: "How does weather affect scheduling?",
      answer:
        "Safety is our priority, so we may need to reschedule work during severe weather conditions like heavy rain or strong winds. However, we monitor forecasts closely and will communicate any changes to your schedule as early as possible. For emergency repairs, we have solutions to provide temporary protection.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, we are fully licensed and comprehensively insured. We hold all necessary licenses for roofing work in NSW and maintain full public liability insurance and workers compensation coverage for your complete peace of mind.",
    },
    {
      question: "Do you provide warranties?",
      answer:
        "Absolutely! We stand behind our work with comprehensive warranties. The specific warranty terms depend on the type of work and materials used, but we'll clearly explain all warranty coverage before starting any project.",
    },
    {
      question: "Can you help with insurance claims?",
      answer:
        "Yes, we have extensive experience working with insurance companies for storm damage and other covered events. We can provide detailed reports and documentation to support your claim and work directly with your insurer to streamline the process.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes! We provide 24/7 emergency roofing services for urgent situations like storm damage, severe leaks, or structural issues. Call us anytime at 1300-XXX-XXX for immediate assistance.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We proudly service all of Sydney including Western Sydney, North Shore, Eastern Suburbs, Inner West, and surrounding areas. Contact us to confirm we service your specific location.",
    },
    {
      question: "How often should I have my roof inspected?",
      answer:
        "We recommend having your roof professionally inspected at least once every 2-3 years, or after any severe weather events. Regular inspections can identify small issues before they become expensive problems.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including cash, bank transfer, credit cards, and can arrange payment plans for larger projects. We'll discuss payment terms during the quote process.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-gray-400 overflow-hidden">
          <img src="faq-anim2.gif" alt="" className="w-full"/>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl">Find Answers to Common Questions</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-lg text-gray-600">
              Can't find what you're looking for?{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact us
              </a>{" "}
              and we'll be happy to help.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-600 transition"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-lg text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp
                      size={24}
                      className="text-blue-600 flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={24}
                      className="text-gray-400 flex-shrink-0"
                    />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <div className="mt-16 bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6">
              We're here to help! Get in touch with our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1300000000"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Call: {phoneNumber}
              </a>
              <a
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
