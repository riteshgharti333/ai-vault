"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaStar,
  FaFire,
  FaCrown,
  FaChartLine,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaBuilding,
  FaIndustry,
  FaMicrochip,
  FaBrain,
  FaRobot,
  FaCode,
  FaImage,
  FaVideo,
  FaMusic,
  FaPenFancy,
  FaPalette,
  FaLayerGroup,
} from "react-icons/fa";

import { FaShieldAlt, FaSmile, FaSearch } from "react-icons/fa";

// Types
interface Company {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: any;
  gradient: string;
  color: string;
  rating: number;
  users: string;
  tools: string[];
  founded: string;
  headquarters: string;
  employees: string;
  featured: boolean;
  logoLetter: string;
}

// Companies data with recognizable names
const companiesData: Company[] = [
  {
    id: "openai",
    name: "OpenAI",
    category: "AI Research",
    description:
      "Leading AI research company behind ChatGPT, GPT-4, and DALL-E",
    icon: FaBrain,
    gradient: "from-emerald-500 to-green-600",
    color: "emerald",
    rating: 4.9,
    users: "100M+",
    tools: ["ChatGPT", "GPT-4", "DALL-E 3", "Whisper"],
    founded: "2015",
    headquarters: "San Francisco, CA",
    employees: "1,500+",
    featured: true,
    logoLetter: "O",
  },
  {
    id: "google",
    name: "Google",
    category: "Technology",
    description:
      "Tech giant with AI products like Gemini, Bard, and TensorFlow",
    icon: FaGlobe,
    gradient: "from-blue-500 to-blue-700",
    color: "blue",
    rating: 4.8,
    users: "1B+",
    tools: ["Gemini", "Bard", "TensorFlow", "Cloud AI"],
    founded: "1998",
    headquarters: "Mountain View, CA",
    employees: "180,000+",
    featured: true,
    logoLetter: "G",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    category: "Technology",
    description:
      "Enterprise AI solutions with Azure AI, Copilot, and OpenAI partnership",
    icon: FaMicrochip,
    gradient: "from-blue-600 to-indigo-600",
    color: "indigo",
    rating: 4.8,
    users: "500M+",
    tools: ["Azure AI", "Copilot", "Bing AI", "Designer"],
    founded: "1975",
    headquarters: "Redmond, WA",
    employees: "220,000+",
    featured: true,
    logoLetter: "M",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    category: "AI Research",
    description:
      "AI safety company behind Claude, focusing on responsible AI development",
    icon: FaShieldAlt,
    gradient: "from-amber-500 to-orange-600",
    color: "amber",
    rating: 4.7,
    users: "50M+",
    tools: ["Claude 3", "Claude API", "Constitutional AI"],
    founded: "2021",
    headquarters: "San Francisco, CA",
    employees: "500+",
    featured: false,
    logoLetter: "A",
  },
  {
    id: "meta",
    name: "Meta",
    category: "Technology",
    description:
      "Social media giant advancing AI with Llama models and AI research",
    icon: FaUsers,
    gradient: "from-blue-400 to-cyan-500",
    color: "cyan",
    rating: 4.6,
    users: "3B+",
    tools: ["Llama 3", "Meta AI", "SeamlessM4T", "SAM"],
    founded: "2004",
    headquarters: "Menlo Park, CA",
    employees: "86,000+",
    featured: false,
    logoLetter: "M",
  },
  {
    id: "adobe",
    name: "Adobe",
    category: "Creative Software",
    description:
      "Creative software leader with AI-powered Firefly and Creative Cloud",
    icon: FaPalette,
    gradient: "from-red-500 to-pink-600",
    color: "red",
    rating: 4.7,
    users: "30M+",
    tools: ["Firefly", "Photoshop AI", "Premiere Pro AI", "Express"],
    founded: "1982",
    headquarters: "San Jose, CA",
    employees: "29,000+",
    featured: false,
    logoLetter: "A",
  },
  {
    id: "canva",
    name: "Canva",
    category: "Design Platform",
    description:
      "Design platform with AI-powered Magic Studio for easy creation",
    icon: FaPenFancy,
    gradient: "from-teal-400 to-emerald-500",
    color: "teal",
    rating: 4.8,
    users: "170M+",
    tools: ["Magic Studio", "AI Image Generator", "Magic Write", "Brand Kit"],
    founded: "2013",
    headquarters: "Sydney, Australia",
    employees: "4,000+",
    featured: false,
    logoLetter: "C",
  },
  {
    id: "notion",
    name: "Notion",
    category: "Productivity",
    description:
      "All-in-one workspace with AI-powered writing and organization",
    icon: FaRocket,
    gradient: "from-gray-700 to-gray-900",
    color: "gray",
    rating: 4.7,
    users: "30M+",
    tools: ["Notion AI", "AI Writer", "AI Summarizer", "Q&A"],
    founded: "2013",
    headquarters: "San Francisco, CA",
    employees: "600+",
    featured: false,
    logoLetter: "N",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Development",
    description:
      "Developer platform with Copilot AI for code completion and generation",
    icon: FaCode,
    gradient: "from-purple-500 to-purple-700",
    color: "purple",
    rating: 4.8,
    users: "100M+",
    tools: ["Copilot", "Copilot Chat", "Code Spaces", "Actions"],
    founded: "2008",
    headquarters: "San Francisco, CA",
    employees: "3,000+",
    featured: false,
    logoLetter: "G",
  },
  {
    id: "perplexity",
    name: "Perplexity",
    category: "AI Search",
    description: "AI-powered answer engine for accurate, real-time information",
    icon: FaSearch,
    gradient: "from-indigo-500 to-purple-600",
    color: "indigo",
    rating: 4.7,
    users: "15M+",
    tools: ["Perplexity Pro", "Copilot", "Focus", "Collections"],
    founded: "2022",
    headquarters: "San Francisco, CA",
    employees: "100+",
    featured: false,
    logoLetter: "P",
  },
  {
    id: "runway",
    name: "Runway",
    category: "AI Video",
    description: "Next-generation AI video creation and editing platform",
    icon: FaVideo,
    gradient: "from-orange-500 to-red-500",
    color: "orange",
    rating: 4.6,
    users: "5M+",
    tools: ["Gen-2", "Gen-1", "Motion Brush", "Green Screen"],
    founded: "2018",
    headquarters: "New York, NY",
    employees: "200+",
    featured: false,
    logoLetter: "R",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    category: "AI Art",
    description:
      "Independent research lab creating stunning AI-generated artwork",
    icon: FaImage,
    gradient: "from-pink-500 to-rose-600",
    color: "pink",
    rating: 4.8,
    users: "50M+",
    tools: [
      "Midjourney V6",
      "Style Reference",
      "Character Consistency",
      "Describe",
    ],
    founded: "2021",
    headquarters: "San Francisco, CA",
    employees: "100+",
    featured: false,
    logoLetter: "M",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "AI Voice",
    description: "Advanced AI voice synthesis and text-to-speech technology",
    icon: FaMusic,
    gradient: "from-violet-500 to-purple-600",
    color: "violet",
    rating: 4.7,
    users: "10M+",
    tools: ["Voice Lab", "Speech Synthesis", "Voice Cloning", "Projects"],
    founded: "2022",
    headquarters: "London, UK",
    employees: "80+",
    featured: false,
    logoLetter: "E",
  },
  {
    id: "huggingface",
    name: "Hugging Face",
    category: "AI Platform",
    description: "Open-source AI community and model hosting platform",
    icon: FaSmile,
    gradient: "from-yellow-400 to-amber-500",
    color: "yellow",
    rating: 4.8,
    users: "5M+",
    tools: ["Transformers", "Diffusers", "Spaces", "Inference API"],
    founded: "2016",
    headquarters: "New York, NY",
    employees: "200+",
    featured: false,
    logoLetter: "H",
  },
  {
    id: "figma",
    name: "Figma",
    category: "Design",
    description:
      "Collaborative design tool with AI-powered features and plugins",
    icon: FaPenFancy,
    gradient: "from-pink-500 to-purple-600",
    color: "pink",
    rating: 4.7,
    users: "30M+",
    tools: ["Figma AI", "Auto Layout", "Dev Mode", "Variables"],
    founded: "2012",
    headquarters: "San Francisco, CA",
    employees: "1,300+",
    featured: false,
    logoLetter: "F",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export const TopCompanies = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "AI Research",
    "Technology",
    "Creative Software",
    "Design Platform",
    "Productivity",
    "Development",
    "AI Search",
    "AI Video",
    "AI Art",
    "AI Voice",
    "AI Platform",
    "Design",
  ];

  const filteredCompanies =
    filter === "All"
      ? companiesData
      : companiesData.filter((company) => company.category === filter);

  const featuredCompanies = companiesData.filter((c) => c.featured);

  return (
    <div className="relative min-h-screen py-20 overflow-hidden">
      

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8" id="companies">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm mb-6"
          >
            <FaBuilding className="text-purple-400 w-4 h-4" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
            <FaStar className="text-purple-400 w-4 h-4" />
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Top Companies Using AI
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the leading companies shaping the future of artificial
            intelligence. From research labs to creative platforms, these
            innovators are revolutionizing technology.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-8"
          >
            {[
              {
                icon: FaBuilding,
                label: "Companies",
                value: companiesData.length,
              },
              { icon: FaUsers, label: "Total Users", value: "2B+" },
              { icon: FaGlobe, label: "Countries", value: "190+" },
              { icon: FaRocket, label: "AI Tools", value: "50+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                  <stat.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Companies - Large Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {featuredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer"
              onClick={() =>
                setSelectedCompany(
                  selectedCompany === company.id ? null : company.id,
                )
              }
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="p-8">
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-20 h-20 bg-gradient-to-br ${company.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <span className="text-3xl font-bold text-white">
                    {company.logoLetter}
                  </span>
                </motion.div>

                {/* Company Info */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {company.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {company.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(company.rating) ? "text-yellow-400" : "text-gray-600"}`}
                      />
                    ))}
                  </div>
                  <span className="text-white font-semibold">
                    {company.rating}
                  </span>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {company.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/10"
                    >
                      {tool}
                    </span>
                  ))}
                  {company.tools.length > 3 && (
                    <span className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-400">
                      +{company.tools.length - 3} more
                    </span>
                  )}
                </div>

                {/* Users Count */}
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaUsers className="w-4 h-4" />
                  <span>{company.users} users</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                filter === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* All Companies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredCompanies.map((company) => (
              <motion.div
                key={company.id}
                layout
                onMouseEnter={() => setHoveredCompany(company.id)}
                onMouseLeave={() => setHoveredCompany(null)}
                onClick={() =>
                  setSelectedCompany(
                    selectedCompany === company.id ? null : company.id,
                  )
                }
              >
                <motion.div
                  whileHover={{ y: -3, scale: 1.02 }}
                  className={`group relative bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    selectedCompany === company.id
                      ? "border-purple-500/50 shadow-xl shadow-purple-500/10"
                      : "border-white/10 hover:border-purple-500/30"
                  }`}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="p-5">
                    <div className="flex items-center gap-4">
                      {/* Logo */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 bg-gradient-to-br ${company.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <span className="text-xl font-bold text-white">
                          {company.logoLetter}
                        </span>
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-white truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                          {company.name}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {company.category}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <FaStar className="text-yellow-400 w-3 h-3" />
                          <span className="text-xs text-gray-400">
                            {company.rating}
                          </span>
                          <span className="text-gray-600">•</span>
                          <FaUsers className="text-gray-400 w-3 h-3" />
                          <span className="text-xs text-gray-400">
                            {company.users}
                          </span>
                        </div>
                      </div>

                      <FaExternalLinkAlt className="text-gray-600 group-hover:text-purple-400 transition-colors flex-shrink-0 w-4 h-4" />
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {selectedCompany === company.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-white/10">
                            <p className="text-sm text-gray-400 mb-4">
                              {company.description}
                            </p>

                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="p-3 bg-white/5 rounded-xl">
                                <div className="text-xs text-gray-500">
                                  Founded
                                </div>
                                <div className="text-sm font-semibold text-white">
                                  {company.founded}
                                </div>
                              </div>
                              <div className="p-3 bg-white/5 rounded-xl">
                                <div className="text-xs text-gray-500">
                                  Employees
                                </div>
                                <div className="text-sm font-semibold text-white">
                                  {company.employees}
                                </div>
                              </div>
                              <div className="col-span-2 p-3 bg-white/5 rounded-xl">
                                <div className="text-xs text-gray-500">
                                  Headquarters
                                </div>
                                <div className="text-sm font-semibold text-white">
                                  {company.headquarters}
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {company.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-2.5 py-1 bg-purple-500/10 rounded-lg text-xs text-purple-400 border border-purple-500/20"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <span className="text-gray-400 pl-4 py-2">
              Want to explore tools from these companies?
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center gap-2"
            >
              Browse All Tools
              <FaArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Need to import FaShieldAlt and FaSmile

export default TopCompanies;
