"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaStar,
  FaHeart,
  FaExternalLinkAlt,
  FaFire,
  FaCrown,
  FaRocket,
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaPause,
  //   FaSparkles,
  FaTrophy,
  FaChartLine,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaGem,
  FaBolt,
  FaThumbsUp,
  FaShareAlt,
  FaBookmark,
} from "react-icons/fa";

// Types
interface FeaturedTool {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  likes: number;
  rating: number;
  users: string;
  isFree: boolean;
  hasFreePlan?: boolean;
  tags: string[];
  features: string[];
  badge?: "Trending" | "New" | "Popular" | "Editor's Choice" | "Top Rated";
  gradient: string;
  stats: {
    growth: string;
    satisfaction: string;
    speed: string;
  };
}

// Sample featured tools data
const featuredTools: FeaturedTool[] = [
  {
    id: "1",
    name: "ChatGPT",
    category: "AI Assistant",
    description:
      "Advanced language model for conversation and content generation",
    longDescription:
      "Experience the power of GPT-4 with advanced reasoning, creative writing, and problem-solving capabilities. Perfect for content creators, developers, and businesses.",
    image: "/chatgpt.png",
    likes: 15420,
    rating: 4.9,
    users: "100M+",
    isFree: true,
    hasFreePlan: true,
    tags: ["NLP", "Conversation", "Writing"],
    features: [
      "GPT-4 Access",
      "Code Generation",
      "Image Understanding",
      "Custom GPTs",
    ],
    badge: "Trending",
    gradient: "from-emerald-400 to-teal-500",
    stats: {
      growth: "+245%",
      satisfaction: "98%",
      speed: "<1s",
    },
  },
  {
    id: "2",
    name: "Midjourney",
    category: "Image Generation",
    description: "Create stunning AI-generated artwork and illustrations",
    longDescription:
      "Transform your ideas into breathtaking visuals with state-of-the-art AI. From photorealistic images to artistic masterpieces, Midjourney pushes creative boundaries.",
    image: "/midjourney.png",
    likes: 12850,
    rating: 4.8,
    users: "50M+",
    isFree: false,
    tags: ["Art", "Design", "Creative"],
    features: [
      "V6 Model",
      "Style Reference",
      "Character Consistency",
      "Aspect Ratios",
    ],
    badge: "Editor's Choice",
    gradient: "from-purple-400 to-pink-500",
    stats: {
      growth: "+189%",
      satisfaction: "96%",
      speed: "~30s",
    },
  },
  {
    id: "3",
    name: "GitHub Copilot",
    category: "Code Assistant",
    description: "AI-powered code completion and pair programming assistant",
    longDescription:
      "Boost your development workflow with intelligent code suggestions, bug fixes, and documentation generation. Supports all major IDEs and programming languages.",
    image: "/copilot.png",
    likes: 18920,
    rating: 4.7,
    users: "10M+",
    isFree: false,
    hasFreePlan: true,
    tags: ["Coding", "Development", "Productivity"],
    features: [
      "Code Completion",
      "Chat Interface",
      "Multi-file Editing",
      "Security Scanning",
    ],
    badge: "Popular",
    gradient: "from-blue-400 to-cyan-500",
    stats: {
      growth: "+312%",
      satisfaction: "94%",
      speed: "Instant",
    },
  },
  {
    id: "4",
    name: "Runway ML",
    category: "Video Generation",
    description: "Next-generation AI video creation and editing platform",
    longDescription:
      "Revolutionize your video production with AI-powered tools for generation, editing, and visual effects. From text-to-video to advanced motion tracking.",
    image: "/runway.png",
    likes: 9670,
    rating: 4.6,
    users: "5M+",
    isFree: false,
    hasFreePlan: true,
    tags: ["Video", "Creative", "Editing"],
    features: ["Gen-2 Video", "Motion Brush", "Green Screen", "Audio Tools"],
    badge: "New",
    gradient: "from-orange-400 to-red-500",
    stats: {
      growth: "+478%",
      satisfaction: "92%",
      speed: "~2min",
    },
  },
  {
    id: "5",
    name: "Notion AI",
    category: "Productivity",
    description:
      "AI-enhanced workspace for notes, docs, and project management",
    longDescription:
      "Supercharge your productivity with AI-powered writing, summarization, and organization tools integrated seamlessly into your workspace.",
    image: "/notion.png",
    likes: 11230,
    rating: 4.8,
    users: "30M+",
    isFree: false,
    hasFreePlan: true,
    tags: ["Writing", "Organization", "Work"],
    features: ["AI Writing", "Summaries", "Translation", "Q&A"],
    badge: "Top Rated",
    gradient: "from-indigo-400 to-purple-500",
    stats: {
      growth: "+156%",
      satisfaction: "97%",
      speed: "Real-time",
    },
  },
];

export const FeaturedAITools: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedTools, setLikedTools] = useState<Set<string>>(new Set());
  const [bookmarkedTools, setBookmarkedTools] = useState<Set<string>>(
    new Set(),
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const categories = [
    "All",
    "AI Assistant",
    "Image Generation",
    "Code Assistant",
    "Video Generation",
    "Productivity",
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % featuredTools.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView]);

  // Filter tools by category
  const filteredTools =
    selectedCategory === "All"
      ? featuredTools
      : featuredTools.filter((tool) => tool.category === selectedCategory);

  const currentTool = filteredTools[activeIndex % filteredTools.length];
  const nextTool = filteredTools[(activeIndex + 1) % filteredTools.length];

  // Navigation handlers
  const handlePrevious = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + filteredTools.length) % filteredTools.length,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % filteredTools.length);
  };

  const handleLike = (toolId: string) => {
    setLikedTools((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(toolId)) {
        newSet.delete(toolId);
      } else {
        newSet.add(toolId);
      }
      return newSet;
    });
  };

  const handleBookmark = (toolId: string) => {
    setBookmarkedTools((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(toolId)) {
        newSet.delete(toolId);
      } else {
        newSet.add(toolId);
      }
      return newSet;
    });
  };

  // Badge styles
  const getBadgeStyles = (badge: string) => {
    const styles: Record<string, string> = {
      Trending: "bg-gradient-to-r from-amber-400 to-orange-500",
      New: "bg-gradient-to-r from-green-400 to-emerald-500",
      Popular: "bg-gradient-to-r from-blue-400 to-cyan-500",
      "Editor's Choice": "bg-gradient-to-r from-purple-400 to-pink-500",
      "Top Rated": "bg-gradient-to-r from-yellow-400 to-amber-500",
    };
    return styles[badge] || "bg-gradient-to-r from-purple-400 to-pink-500";
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen  py-20 overflow-hidden"
      id="featured"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 
              rounded-full border border-purple-500/20 backdrop-blur-sm mb-6"
          >
            <FaCrown className="text-yellow-400 w-4 h-4" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Collection
            </span>
            <FaStar className="text-purple-400 w-4 h-4 animate-pulse" />
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Featured AI Tools
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the most innovative and powerful AI tools handpicked by our
            experts. From creative assistants to development platforms, find the
            perfect tool for your needs.
          </p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mt-8"
          >
            {[
              { icon: FaTrophy, label: "Curated Tools", value: "500+" },
              { icon: FaUsers, label: "Active Users", value: "2M+" },
              { icon: FaChartLine, label: "Monthly Growth", value: "+45%" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                  <stat.icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory(category);
                setActiveIndex(0);
              }}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {category === "All" && <FaFire className="inline-block mr-2" />}
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Featured Card */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Large Card - Current Featured Tool */}
          <motion.div
            key={currentTool.id}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:col-span-3"
          >
            <div
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl 
              overflow-hidden hover:border-purple-500/50 transition-all duration-500
              hover:shadow-2xl hover:shadow-purple-500/10"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentTool.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Badge */}
              {currentTool.badge && (
                <div className="absolute top-6 left-6 z-10">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className={`px-4 py-2 rounded-full text-white text-xs font-bold 
                      shadow-lg flex items-center gap-2 ${getBadgeStyles(currentTool.badge)}`}
                  >
                    {currentTool.badge === "Trending" && (
                      <FaFire className="w-3 h-3" />
                    )}
                    {currentTool.badge === "New" && (
                      <FaStar className="w-3 h-3" />
                    )}
                    {currentTool.badge === "Popular" && (
                      <FaChartLine className="w-3 h-3" />
                    )}
                    {currentTool.badge === "Editor's Choice" && (
                      <FaCrown className="w-3 h-3" />
                    )}
                    {currentTool.badge === "Top Rated" && (
                      <FaStar className="w-3 h-3" />
                    )}
                    {currentTool.badge}
                  </motion.div>
                </div>
              )}

              {/* Content */}
              <div className="relative p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${currentTool.gradient} 
                        rounded-2xl flex items-center justify-center text-3xl font-bold 
                        text-white shadow-lg`}
                    >
                      {currentTool.name.charAt(0)}
                    </motion.div>

                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {currentTool.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">
                          {currentTool.category}
                        </span>
                        <span className="text-gray-600">•</span>
                        <div className="flex items-center gap-1">
                          <FaUsers className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-400">
                            {currentTool.users}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                    <FaStar className="text-yellow-400 w-5 h-5" />
                    <span className="text-2xl font-bold text-white">
                      {currentTool.rating}
                    </span>
                    <span className="text-gray-400 text-sm">/5</span>
                  </div>
                </div>

                {/* Long Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {currentTool.longDescription}
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {currentTool.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center gap-3"
                    >
                      <div className="p-1.5 bg-green-500/10 rounded-lg">
                        <FaCheckCircle className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/5 rounded-2xl border border-white/10">
                  {Object.entries(currentTool.stats).map(
                    ([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="text-center"
                      >
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${currentTool.gradient} bg-clip-text text-transparent`}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-gray-400 mt-1 capitalize">
                          {key}
                        </div>
                      </motion.div>
                    ),
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 px-8 py-4 bg-gradient-to-r ${currentTool.gradient} 
                      text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl 
                      transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <FaRocket className="w-5 h-5" />
                    Try {currentTool.name}
                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(currentTool.id)}
                      className={`p-4 rounded-2xl transition-all duration-300 ${
                        likedTools.has(currentTool.id)
                          ? "bg-pink-500/20 text-pink-400 border border-pink-500/50"
                          : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      <FaHeart
                        className={`w-5 h-5 ${likedTools.has(currentTool.id) ? "animate-pulse" : ""}`}
                      />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleBookmark(currentTool.id)}
                      className={`p-4 rounded-2xl transition-all duration-300 ${
                        bookmarkedTools.has(currentTool.id)
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                          : "bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      <FaBookmark className="w-5 h-5" />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-white/5 text-gray-400 hover:bg-white/10 
                        rounded-2xl border border-white/10 transition-all duration-300"
                    >
                      <FaShareAlt className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar - Next Tools & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Next Featured Tool Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6
                hover:border-purple-500/50 transition-all duration-500"
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Up Next
              </h3>

              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-br ${nextTool.gradient} 
                    rounded-2xl flex items-center justify-center text-2xl font-bold text-white`}
                >
                  {nextTool.name.charAt(0)}
                </motion.div>

                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white">
                    {nextTool.name}
                  </h4>
                  <p className="text-sm text-gray-400">{nextTool.category}</p>
                </div>

                <FaStar className="text-yellow-400 w-5 h-5" />
                <span className="text-white font-bold">{nextTool.rating}</span>
              </div>

              <p className="text-gray-400 text-sm mb-4">
                {nextTool.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {nextTool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-purple-500/10 text-purple-400 
                    text-xs rounded-full border border-purple-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Top Tools List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6
                hover:border-purple-500/50 transition-all duration-500"
            >
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Top Ranked
              </h3>

              <div className="space-y-3">
                {featuredTools.slice(0, 4).map((tool, index) => (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * index }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 
                      transition-all cursor-pointer group"
                  >
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-lg 
                      bg-gradient-to-br from-purple-500/20 to-pink-500/20 
                      text-purple-400 font-bold text-sm"
                    >
                      #{index + 1}
                    </div>

                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${tool.gradient} 
                      rounded-xl flex items-center justify-center text-lg font-bold text-white`}
                    >
                      {tool.name.charAt(0)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white truncate">
                        {tool.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {tool.category}
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400 w-3 h-3" />
                      <span className="text-sm font-semibold text-white">
                        {tool.rating}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navigation Controls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 
              rounded-2xl text-white transition-all hover:border-purple-500/50"
          >
            <FaArrowLeft className="w-5 h-5" />
          </motion.button>

          {/* Progress Dots */}
          <div className="flex gap-3">
            {filteredTools.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500"
                    : "w-3 h-3 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 
              rounded-2xl text-white transition-all hover:border-purple-500/50"
          >
            <FaArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Auto-play Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`p-4 rounded-2xl transition-all ${
              isAutoPlaying
                ? "bg-purple-500/20 text-purple-400 border border-purple-500/50"
                : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
            }`}
          >
            {isAutoPlaying ? (
              <FaPause className="w-4 h-4" />
            ) : (
              <FaPlay className="w-4 h-4" />
            )}
          </motion.button>
        </motion.div>

        {/* Quick Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            {
              icon: FaBolt,
              label: "Lightning Fast",
              value: "Avg 0.5s Response",
            },
            { icon: FaGem, label: "Premium Quality", value: "99% Uptime" },
            { icon: FaClock, label: "24/7 Support", value: "Always Available" },
            {
              icon: FaThumbsUp,
              label: "Satisfaction",
              value: "98% Happy Users",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl 
                text-center hover:border-purple-500/50 transition-all duration-300"
            >
              <item.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-sm font-semibold text-white">
                {item.label}
              </div>
              <div className="text-xs text-gray-400 mt-1">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
    </div>
  );
};
