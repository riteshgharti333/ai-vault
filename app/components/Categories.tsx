"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaPenFancy,
  FaCode,
  FaImage,
  FaVideo,
  FaMusic,
  FaRocket,
  FaChartLine,
  FaGraduationCap,
  FaPalette,
  FaBriefcase,
  FaArrowRight,
  FaStar,
  FaFire,
  FaUsers,
  FaClock,
  FaCrown,
  FaLayerGroup,
  FaSearch,
  FaFilter,
  FaCheckCircle,
  FaArrowUp,
  FaGem,
  FaBolt,
  FaGlobe,
  FaThumbsUp,
  FaHeart,
  FaBookmark,
  FaShareAlt,
  FaPlay,
  FaPause,
} from "react-icons/fa";

// Types
interface Category {
  id: string;
  name: string;
  icon: any;
  description: string;
  toolCount: number;
  gradient: string;
  color: string;
  trending: boolean;
  popularTools: string[];
  growth: string;
  users: string;
}

// Categories data
const categoriesData: Category[] = [
  {
    id: "writing",
    name: "Writing",
    icon: FaPenFancy,
    description:
      "AI-powered writing assistants, content generators, and copywriting tools",
    toolCount: 45,
    gradient: "from-blue-500 to-cyan-500",
    color: "blue",
    trending: true,
    popularTools: ["ChatGPT", "Jasper", "Copy.ai"],
    growth: "+156%",
    users: "2.5M+",
  },
  {
    id: "coding",
    name: "Coding",
    icon: FaCode,
    description:
      "Code generation, debugging, and development acceleration tools",
    toolCount: 38,
    gradient: "from-purple-500 to-pink-500",
    color: "purple",
    trending: true,
    popularTools: ["GitHub Copilot", "Cursor", "Tabnine"],
    growth: "+234%",
    users: "5M+",
  },
  {
    id: "image-generation",
    name: "Image Generation",
    icon: FaImage,
    description: "Create stunning visuals, artwork, and designs with AI",
    toolCount: 32,
    gradient: "from-pink-500 to-rose-500",
    color: "pink",
    trending: true,
    popularTools: ["Midjourney", "DALL-E 3", "Stable Diffusion"],
    growth: "+189%",
    users: "10M+",
  },
  {
    id: "video",
    name: "Video",
    icon: FaVideo,
    description: "AI video creation, editing, and enhancement platforms",
    toolCount: 28,
    gradient: "from-orange-500 to-red-500",
    color: "orange",
    trending: false,
    popularTools: ["Runway ML", "Synthesia", "Pictory"],
    growth: "+312%",
    users: "3M+",
  },
  {
    id: "audio",
    name: "Audio",
    icon: FaMusic,
    description:
      "Music generation, voice synthesis, and audio processing tools",
    toolCount: 25,
    gradient: "from-green-500 to-emerald-500",
    color: "green",
    trending: false,
    popularTools: ["ElevenLabs", "Murf.ai", "AIVA"],
    growth: "+145%",
    users: "1.8M+",
  },
  {
    id: "productivity",
    name: "Productivity",
    icon: FaRocket,
    description: "Boost efficiency with AI task management and automation",
    toolCount: 35,
    gradient: "from-teal-500 to-green-500",
    color: "teal",
    trending: true,
    popularTools: ["Notion AI", "Taskade", "Mem"],
    growth: "+178%",
    users: "4M+",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: FaChartLine,
    description: "AI marketing tools for SEO, social media, and analytics",
    toolCount: 30,
    gradient: "from-red-500 to-pink-500",
    color: "red",
    trending: false,
    popularTools: ["HubSpot AI", "Semrush", "SurferSEO"],
    growth: "+167%",
    users: "2.2M+",
  },
  {
    id: "education",
    name: "Education",
    icon: FaGraduationCap,
    description:
      "Learning platforms, tutoring tools, and educational content creation",
    toolCount: 22,
    gradient: "from-indigo-500 to-purple-500",
    color: "indigo",
    trending: false,
    popularTools: ["Duolingo Max", "Khanmigo", "Quizlet"],
    growth: "+123%",
    users: "6M+",
  },
  {
    id: "design",
    name: "Design",
    icon: FaPalette,
    description: "UI/UX design, graphic creation, and brand identity tools",
    toolCount: 28,
    gradient: "from-yellow-500 to-orange-500",
    color: "yellow",
    trending: true,
    popularTools: ["Figma AI", "Canva AI", "Uizard"],
    growth: "+198%",
    users: "3.5M+",
  },
  {
    id: "business",
    name: "Business",
    icon: FaBriefcase,
    description: "Business analytics, finance, and enterprise AI solutions",
    toolCount: 25,
    gradient: "from-cyan-500 to-blue-500",
    color: "cyan",
    trending: false,
    popularTools: ["Jasper AI", "Beautiful.ai", "Tome"],
    growth: "+145%",
    users: "1.5M+",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");

  const filteredCategories = categoriesData.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalTools = categoriesData.reduce(
    (sum, cat) => sum + cat.toolCount,
    0,
  );
  const trendingCount = categoriesData.filter((cat) => cat.trending).length;

  return (
    <div
      className="relative min-h-screen  py-20 overflow-hidden"
      id="categories"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
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
            <FaLayerGroup className="text-purple-400 w-4 h-4" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Browse by Category
            </span>
            <FaStar className="text-purple-400 w-4 h-4" />
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Explore Categories
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover AI tools organized by category. Find the perfect tools for
            your needs, from content creation to business analytics.
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
                icon: FaLayerGroup,
                label: "Categories",
                value: categoriesData.length,
              },
              { icon: FaRocket, label: "Total Tools", value: totalTools },
              { icon: FaFire, label: "Trending", value: trendingCount },
              { icon: FaUsers, label: "Active Users", value: "2M+" },
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

        {/* Search and View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          {/* Search Bar */}
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* View Toggle */}
          <div className="flex bg-white/5 rounded-xl border border-white/10 p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                viewMode === "grid"
                  ? "bg-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode("compact")}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                viewMode === "compact"
                  ? "bg-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Compact View
            </button>
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          }
        >
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                // variants={itemVariants}
                layout
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.id ? null : category.id,
                  )
                }
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group relative bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    selectedCategory === category.id
                      ? `border-${category.color}-500/50 shadow-2xl`
                      : "border-white/10 hover:border-purple-500/50 hover:shadow-xl"
                  }`}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Trending Badge */}
                  {category.trending && (
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-white text-xs font-bold shadow-lg"
                      >
                        <FaFire className="w-3 h-3" />
                        Trending
                      </motion.div>
                    </div>
                  )}

                  {viewMode === "grid" ? (
                    /* Grid View Card */
                    <div className="p-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                      >
                        <category.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Category Name */}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {category.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4 text-sm">
                        <span className="text-gray-400">
                          <FaRocket className="inline mr-1 w-3 h-3" />
                          {category.toolCount} tools
                        </span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <FaArrowUp className="w-3 h-3" />
                          {category.growth}
                        </span>
                      </div>

                      {/* Popular Tools */}
                      <div className="space-y-2">
                        <div className="text-xs text-gray-500 font-medium uppercase tracking-wider flex items-center gap-1">
                          <FaStar className="w-3 h-3" />
                          Popular Tools
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {category.popularTools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-300 border border-white/10"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expand Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`mt-4 w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          selectedCategory === category.id
                            ? `bg-gradient-to-r ${category.gradient} text-white`
                            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {selectedCategory === category.id
                          ? "Hide Details"
                          : "View Details"}
                      </motion.button>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {selectedCategory === category.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-white/10">
                              <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-white/5 rounded-xl">
                                  <div className="text-lg font-bold text-white">
                                    {category.users}
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    Active Users
                                  </div>
                                </div>
                                <div className="p-3 bg-white/5 rounded-xl">
                                  <div className="text-lg font-bold text-emerald-400">
                                    {category.growth}
                                  </div>
                                  <div className="text-xs text-gray-400">
                                    Growth Rate
                                  </div>
                                </div>
                              </div>
                              <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`mt-4 w-full px-4 py-2.5 bg-gradient-to-r ${category.gradient} text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all`}
                              >
                                Explore {category.name} Tools
                                <FaArrowRight className="inline ml-2" />
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    /* Compact View Card */
                    <div className="p-4">
                      <div className="flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <category.icon className="w-6 h-6 text-white" />
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-bold text-white truncate">
                              {category.name}
                            </h3>
                            {category.trending && (
                              <FaFire className="text-amber-400 w-3 h-3 flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-sm text-gray-400 line-clamp-1">
                            {category.description}
                          </p>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <div className="text-lg font-bold text-white">
                            {category.toolCount}
                          </div>
                          <div className="text-xs text-gray-400">tools</div>
                        </div>

                        <FaArrowRight className="text-gray-600 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <FaSearch className="text-6xl text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">
              No categories found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search term to find what you're looking for.
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <span className="text-gray-400 pl-4 py-2">
              Can't find what you're looking for?
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-purple-500/40 transition-all"
            >
              View All Tools
              <FaArrowRight className="inline ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
