"use client";

import { motion } from "framer-motion";
import {
  FaRobot,
  FaUsers,
  FaRocket,
  FaLightbulb,
  FaHeart,
  FaGlobe,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaCrown,
  FaFire,
  FaChartLine,
  FaLayerGroup,
  FaShieldAlt,
  FaBolt,
  FaHandshake,
  FaQuoteLeft,
  FaGithub,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    {
      icon: FaRocket,
      value: "200+",
      label: "AI Tools",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: FaLayerGroup,
      value: "15+",
      label: "Categories",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: FaUsers,
      value: "50K+",
      label: "Monthly Users",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: FaCheckCircle,
      value: "100%",
      label: "Curated",
      gradient: "from-amber-400 to-orange-500",
    },
  ];

  const features = [
    {
      icon: FaLightbulb,
      title: "Curated Selection",
      description:
        "Every tool is hand-picked and tested by our team of AI experts to ensure quality and relevance for your needs.",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/20",
      iconColor: "text-purple-400",
    },
    {
      icon: FaUsers,
      title: "Community Driven",
      description:
        "Our platform grows with suggestions, reviews, and feedback from our passionate community of AI enthusiasts.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: FaGlobe,
      title: "Global Reach",
      description:
        "Serving users from over 100 countries worldwide, making AI tools accessible to everyone, everywhere.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/20",
      iconColor: "text-emerald-400",
    },
  ];

  const values = [
    {
      icon: FaShieldAlt,
      title: "Trust & Quality",
      description:
        "We thoroughly vet every tool before listing it on our platform.",
    },
    {
      icon: FaBolt,
      title: "Innovation",
      description:
        "We stay ahead of the curve, constantly updating our directory with the latest AI tools.",
    },
    {
      icon: FaHandshake,
      title: "Community First",
      description:
        "Our users are at the heart of everything we do. Your feedback shapes our platform.",
    },
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "AI researcher with 10+ years of experience in machine learning and natural language processing.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Maria Chen",
      role: "Head of Curation",
      bio: "Former product manager at top tech companies, passionate about discovering innovative AI solutions.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "David Smith",
      role: "Lead Developer",
      bio: "Full-stack developer and AI enthusiast, building the future of AI tool discovery.",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm mb-6"
            >
              <FaStar className="text-purple-400 w-4 h-4" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Story
              </span>
              <FaHeart className="text-pink-400 w-4 h-4 animate-pulse" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                AI Vault
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your curated directory for the most powerful AI tools that are
              transforming industries and enhancing creativity worldwide.
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            />
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/25"
                  >
                    <FaRocket className="text-white text-3xl" />
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Our Mission
                    </span>
                  </h2>

                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    To democratize access to artificial intelligence tools by
                    providing a comprehensive, curated directory that helps
                    individuals and businesses discover the perfect AI solutions
                    for their needs.
                  </p>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    We believe that AI should be accessible to everyone, not
                    just large corporations with massive budgets.
                  </p>

                  {/* Quote */}
                  <div className="mt-8 p-4 bg-purple-500/5 rounded-xl border border-purple-500/10">
                    <FaQuoteLeft className="text-purple-400/50 text-2xl mb-2" />
                    <p className="text-gray-300 italic">
                      "AI is the most transformative technology of our time, and
                      we're committed to making it accessible to all."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                  whileHover={{ x: 10 }}
                  className="group relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div
                    className={`relative flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-6 rounded-2xl border ${feature.borderColor} hover:border-purple-500/30 transition-all`}
                  >
                    <div
                      className={`p-3 bg-white/5 rounded-xl border border-white/10`}
                    >
                      <feature.icon
                        className={`${feature.iconColor} text-2xl`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5" />

            <div className="relative">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    By the Numbers
                  </span>
                </h2>
                <p className="text-gray-400">
                  Our growth and impact in numbers
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <stat.icon className="text-white text-2xl" />
                    </motion.div>
                    <div
                      className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Growth Chart Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FaChartLine className="text-purple-400" />
                    <span className="text-white font-semibold">
                      Monthly Growth
                    </span>
                  </div>
                  <span className="text-emerald-400 font-bold">+45%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Our Values Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-gray-400">What drives us every day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="text-purple-400 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent hidden md:block" />

              <div className="space-y-12">
                {[
                  {
                    year: "2023",
                    title: "The Beginning",
                    description:
                      "AI Vault was born from a simple observation: the AI tool landscape was growing at an incredible pace, but finding the right tools was becoming increasingly difficult.",
                  },
                  {
                    year: "2024",
                    title: "Rapid Growth",
                    description:
                      "What started as a small side project grew into a trusted resource used by thousands of people around the world to navigate the ever-expanding universe of AI tools.",
                  },
                  {
                    year: "2025",
                    title: "Looking Forward",
                    description:
                      "We continue to expand our directory, improve our curation process, and build new features to help our community discover the best AI tools.",
                  },
                ].map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index }}
                    className="flex gap-6"
                  >
                    <div className="hidden md:flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-purple-500/25 flex-shrink-0">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all">
                      <div className="md:hidden text-sm text-purple-400 font-bold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-12 border border-purple-500/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

            <div className="relative text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 px-6 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-6"
              >
                <FaCrown className="text-yellow-400 w-4 h-4" />
                <span className="text-sm font-medium text-purple-400">
                  Join Our Community
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Explore AI Tools?
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Be part of the movement to make AI tools accessible to everyone.
                Submit your tool, suggest improvements, or just explore what's
                possible.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/submit">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center gap-2"
                  >
                    <FaRocket className="w-4 h-4" />
                    Submit a Tool
                    <FaArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl font-semibold hover:bg-white/10 hover:border-purple-500/30 transition-all flex items-center gap-2"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 py-8 text-center border-t border-white/10"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with
            <FaHeart className="text-pink-400 animate-pulse mx-1" />
            for the AI community
          </p>
        </motion.div>
      </div>
    </div>
  );
}
