"use client";
import {
  FaRobot,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b  to-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with the AI Vault team. We'd love to hear from you!
          </p>
          <div className="bg-gradient-to-r from-emerald-500 to-green-400 h-1 w-24 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                Let's Talk
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Have questions about AI tools? Want to submit your tool?
                Interested in partnership opportunities? Reach out to us!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500/10 p-3 rounded-lg">
                  <FaEnvelope className="text-emerald-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-300">hello@aivault.com</p>
                  <p className="text-gray-300">support@aivault.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500/10 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-emerald-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-300">123 AI Boulevard</p>
                  <p className="text-gray-300">Tech Valley, CA 94103</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-500/10 p-3 rounded-lg">
                  <FaPhone className="text-emerald-400 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-AIVAULT</p>
                  <p className="text-gray-300">
                    Mon - Fri, 9:00 AM - 6:00 PM PST
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-gray-800/50 rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800/50 rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800/50 rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  placeholder="Tell us how we can help..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20 flex items-center justify-center"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "How do I submit my AI tool to AI Vault?",
                answer:
                  "You can submit your tool through our submission form or email us directly with details about your tool.",
              },
              {
                question: "How long does it take to review a submitted tool?",
                answer:
                  "We typically review submissions within 3-5 business days and will notify you once your tool is listed.",
              },
              {
                question:
                  "Do you offer promotional opportunities for AI tools?",
                answer:
                  "Yes, we offer featured listings and promotional opportunities. Contact us for more information.",
              },
              {
                question: "Can I request a tool to be added to AI Vault?",
                answer:
                  "Absolutely! We welcome suggestions for tools that should be included in our directory.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/10"
              >
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-br from-emerald-900/20 to-black rounded-2xl p-12 border border-emerald-500/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of AI enthusiasts and professionals who use AI Vault
            to discover the best tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-white font-medium py-3 px-8 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20">
              Submit a Tool
            </button>
            <button className="bg-gray-800/50 hover:bg-gray-800/70 text-white font-medium py-3 px-8 rounded-lg border border-emerald-500/20 transition-all">
              Browse Tools
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
