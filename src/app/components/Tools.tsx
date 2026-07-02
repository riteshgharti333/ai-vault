"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toolDataList } from "../data/data";
import {
  FaSearch,
  FaTimes,
  FaSlidersH,
  FaCheck,
  FaStar,
  FaFire,
  FaRocket,
  FaFilter,
  FaLayerGroup,
  FaDollarSign,
  FaArrowUp,
  FaList,
  FaHeart,
  FaExternalLinkAlt,
  FaCrown,
  FaGem,
  FaBolt,
  FaChartLine,
  FaUsers,
  FaClock,
  FaThumbsUp,
  FaShareAlt,
  FaBookmark,
  FaPlay,
  FaPause,
  FaArrowRight,
  FaArrowLeft,
  FaTrophy,
  FaTable,
} from "react-icons/fa";

// Types
interface Tool {
  name: string;
  category: string;
  description: string;
  image: string;
  likes: number;
  isFree: boolean;
  tags: string[];
  hasFreePlan?: boolean;
}

// Featured tools data
const featuredTools = [
  {
    name: "ChatGPT",
    category: "AI Assistant",
    description:
      "Advanced language model for conversation and content generation",
    longDescription:
      "Experience the power of GPT-4 with advanced reasoning, creative writing, and problem-solving capabilities.",
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
    stats: { growth: "+245%", satisfaction: "98%", speed: "<1s" },
  },
  {
    name: "Midjourney",
    category: "Image Generation",
    description: "Create stunning AI-generated artwork and illustrations",
    longDescription:
      "Transform your ideas into breathtaking visuals with state-of-the-art AI.",
    likes: 12850,
    rating: 4.8,
    users: "50M+",
    isFree: false,
    tags: ["Art", "Design", "Creative"],
    features: ["V6 Model", "Style Reference", "Character Consistency"],
    badge: "Editor's Choice",
    gradient: "from-purple-400 to-pink-500",
    stats: { growth: "+189%", satisfaction: "96%", speed: "~30s" },
  },
  {
    name: "GitHub Copilot",
    category: "Code Assistant",
    description: "AI-powered code completion and pair programming",
    longDescription:
      "Boost your development workflow with intelligent code suggestions and bug fixes.",
    likes: 18920,
    rating: 4.7,
    users: "10M+",
    isFree: false,
    hasFreePlan: true,
    tags: ["Coding", "Development", "Productivity"],
    features: ["Code Completion", "Chat Interface", "Multi-file Editing"],
    badge: "Popular",
    gradient: "from-blue-400 to-cyan-500",
    stats: { growth: "+312%", satisfaction: "94%", speed: "Instant" },
  },
  {
    name: "Runway ML",
    category: "Video Generation",
    description: "Next-generation AI video creation platform",
    longDescription:
      "Revolutionize your video production with AI-powered tools for generation and editing.",
    likes: 9670,
    rating: 4.6,
    users: "5M+",
    isFree: false,
    hasFreePlan: true,
    tags: ["Video", "Creative", "Editing"],
    features: ["Gen-2 Video", "Motion Brush", "Green Screen"],
    badge: "New",
    gradient: "from-orange-400 to-red-500",
    stats: { growth: "+478%", satisfaction: "92%", speed: "~2min" },
  },
];

const SORT_OPTIONS = [
  { value: "popular", label: "Most Popular", icon: FaFire },
  { value: "newest", label: "Newest", icon: FaRocket },
  { value: "rating", label: "Highest Rated", icon: FaStar },
  { value: "name", label: "Alphabetical", icon: FaLayerGroup },
] as const;

const PRICING_OPTIONS = [
  { value: "Free", label: "Free", color: "green" },
  { value: "Freemium", label: "Freemium", color: "blue" },
  { value: "Paid", label: "Paid", color: "purple" },
  { value: "Premium", label: "Premium", color: "amber" },
] as const;

const Tools: React.FC = () => {
  // State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState("popular");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [likedTools, setLikedTools] = useState<Set<string>>(new Set());
  const [bookmarkedTools, setBookmarkedTools] = useState<Set<string>>(
    new Set(),
  );
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Derived data
  const categories = useMemo(
    () => [...new Set(toolDataList.map((item: Tool) => item.category))].sort(),
    [],
  );

  // Filter and sort tools
  const filteredTools = useMemo(() => {
    let tools = [...toolDataList];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      tools = tools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.tags.some((tag) => tag.toLowerCase().includes(query)),
      );
    }

    if (selectedCategories.length > 0) {
      tools = tools.filter((tool) =>
        selectedCategories.includes(tool.category),
      );
    }

    if (selectedPricing.length > 0) {
      tools = tools.filter((tool) => {
        return selectedPricing.some((price) => {
          switch (price) {
            case "Free":
              return tool.isFree;
            case "Freemium":
              return tool.hasFreePlan && !tool.isFree;
            case "Paid":
              return !tool.isFree && !tool.hasFreePlan;
            case "Premium":
              return !tool.isFree;
            default:
              return true;
          }
        });
      });
    }

    switch (selectedSort) {
      case "popular":
        tools.sort((a, b) => b.likes - a.likes);
        break;
      case "rating":
        tools.sort((a, b) => b.likes - a.likes);
        break;
      case "name":
        tools.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        tools.reverse();
        break;
    }

    return tools;
  }, [searchQuery, selectedCategories, selectedPricing, selectedSort]);

  // Handlers
  const toggleCategory = useCallback((category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  }, []);

  const togglePricing = useCallback((pricing: string) => {
    setSelectedPricing((prev) =>
      prev.includes(pricing)
        ? prev.filter((p) => p !== pricing)
        : [...prev, pricing],
    );
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedPricing([]);
    setSelectedSort("popular");
  }, []);

  const hasActiveFilters =
    searchQuery !== "" ||
    selectedCategories.length > 0 ||
    selectedPricing.length > 0;

  // Scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-play featured
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % featuredTools.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPricingBadge = (tool: Tool) => {
    if (tool.isFree) return { text: "Free", color: "green" };
    if (tool.hasFreePlan) return { text: "Freemium", color: "blue" };
    return { text: "Paid", color: "purple" };
  };

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
    <div className="min-h-screen" id="tools">
      {/* Hero Section with Featured Tools */}
      <div className="relative overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm mb-6"
            >
              <FaCrown className="text-yellow-400 w-4 h-4" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Tools Directory
              </span>
              <FaStar className="text-purple-400 w-4 h-4 animate-pulse" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Discover AI Tools
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore {toolDataList.length}+ handpicked AI tools to supercharge
              your workflow and unlock new possibilities
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mt-8"
            >
              {[
                {
                  icon: FaLayerGroup,
                  label: "Total Tools",
                  value: toolDataList.length,
                },
                {
                  icon: FaFilter,
                  label: "Categories",
                  value: categories.length,
                },
                {
                  icon: FaDollarSign,
                  label: "Free Tools",
                  value: toolDataList.filter((t) => t.isFree).length,
                },
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

          {/* Featured Tools Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaTrophy className="text-yellow-400 w-6 h-6" />
                Featured Tools
              </h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setFeaturedIndex(
                      (prev) =>
                        (prev - 1 + featuredTools.length) %
                        featuredTools.length,
                    )
                  }
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all"
                >
                  <FaArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`p-2 rounded-xl transition-all ${
                    isAutoPlaying
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-white/5 text-gray-400"
                  }`}
                >
                  {isAutoPlaying ? (
                    <FaPause className="w-4 h-4" />
                  ) : (
                    <FaPlay className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() =>
                    setFeaturedIndex(
                      (prev) => (prev + 1) % featuredTools.length,
                    )
                  }
                  className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all"
                >
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={featuredIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="grid lg:grid-cols-2 gap-8"
              >
                {/* Featured Tool Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${featuredTools[featuredIndex].gradient} opacity-5`}
                  />

                  {featuredTools[featuredIndex].badge && (
                    <div className="absolute top-6 left-6 z-10">
                      <div
                        className={`px-4 py-2 rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-2 ${getBadgeStyles(featuredTools[featuredIndex].badge!)}`}
                      >
                        {featuredTools[featuredIndex].badge === "Trending" && (
                          <FaFire className="w-3 h-3" />
                        )}
                        {featuredTools[featuredIndex].badge === "New" && (
                          <FaStar className="w-3 h-3" />
                        )}
                        {featuredTools[featuredIndex].badge ===
                          "Editor's Choice" && <FaCrown className="w-3 h-3" />}
                        {featuredTools[featuredIndex].badge}
                      </div>
                    </div>
                  )}

                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${featuredTools[featuredIndex].gradient} rounded-2xl flex items-center justify-center text-2xl font-bold text-white`}
                        >
                          {featuredTools[featuredIndex].name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {featuredTools[featuredIndex].name}
                          </h3>
                          <p className="text-gray-400">
                            {featuredTools[featuredIndex].category}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-white/5 px-4 py-2 rounded-xl">
                        <FaStar className="text-yellow-400 w-5 h-5" />
                        <span className="text-2xl font-bold text-white">
                          {featuredTools[featuredIndex].rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6">
                      {featuredTools[featuredIndex].longDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {featuredTools[featuredIndex].features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <FaCheck className="text-green-400 w-4 h-4" />
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-white/5 rounded-2xl">
                      {Object.entries(featuredTools[featuredIndex].stats).map(
                        ([key, value]) => (
                          <div key={key} className="text-center">
                            <div
                              className={`text-xl font-bold bg-gradient-to-r ${featuredTools[featuredIndex].gradient} bg-clip-text text-transparent`}
                            >
                              {value}
                            </div>
                            <div className="text-xs text-gray-400 capitalize">
                              {key}
                            </div>
                          </div>
                        ),
                      )}
                    </div>

                    <button
                      className={`w-full px-6 py-3 bg-gradient-to-r ${featuredTools[featuredIndex].gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all`}
                    >
                      Try Now
                    </button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-4">
                  {featuredTools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      onClick={() => setFeaturedIndex(index)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all ${
                        index === featuredIndex
                          ? "bg-purple-500/10 border border-purple-500/30"
                          : "bg-white/5 border border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${tool.gradient} rounded-xl flex items-center justify-center text-lg font-bold text-white`}
                        >
                          {tool.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">
                            {tool.name}
                          </h4>
                          <p className="text-sm text-gray-400">
                            {tool.category}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaStar className="text-yellow-400 w-4 h-4" />
                          <span className="text-white font-semibold">
                            {tool.rating}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools, categories, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex gap-3">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 cursor-pointer hover:bg-white/10 transition-all"
              >
                {SORT_OPTIONS.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-gray-900"
                  >
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex bg-white/5 rounded-xl border border-white/10 p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-purple-500 text-white" : "text-gray-400 hover:text-white"}`}
                >
                  <FaTable className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 rounded-lg transition-all ${viewMode === "list" ? "bg-purple-500 text-white" : "text-gray-400 hover:text-white"}`}
                >
                  <FaList className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium transition-all ${
                  isFiltersOpen || hasActiveFilters
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                }`}
              >
                <FaSlidersH className="w-4 h-4" />
                <span className="hidden sm:inline">Filters</span>
                {hasActiveFilters && (
                  <span className="bg-white text-purple-600 text-xs font-bold px-2 py-0.5 rounded-full">
                    {selectedCategories.length +
                      selectedPricing.length +
                      (searchQuery ? 1 : 0)}
                  </span>
                )}
              </button>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-3.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <AnimatePresence>
            {isFiltersOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-8 mt-6 pt-6 border-t border-white/10">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                        Categories
                      </h3>
                      <button
                        onClick={() =>
                          setSelectedCategories(
                            selectedCategories.length === categories.length
                              ? []
                              : [...categories],
                          )
                        }
                        className="text-sm text-purple-400 hover:text-purple-300 font-medium"
                      >
                        {selectedCategories.length === categories.length
                          ? "Deselect All"
                          : "Select All"}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <motion.button
                          key={category}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleCategory(category)}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            selectedCategories.includes(category)
                              ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                              : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                          }`}
                        >
                          {selectedCategories.includes(category) && (
                            <FaCheck className="w-3 h-3" />
                          )}
                          {category}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                        Pricing
                      </h3>
                      <button
                        onClick={() =>
                          setSelectedPricing(
                            selectedPricing.length === PRICING_OPTIONS.length
                              ? []
                              : PRICING_OPTIONS.map((p) => p.value),
                          )
                        }
                        className="text-sm text-purple-400 hover:text-purple-300 font-medium"
                      >
                        {selectedPricing.length === PRICING_OPTIONS.length
                          ? "Deselect All"
                          : "Select All"}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {PRICING_OPTIONS.map(({ value, label }) => (
                        <motion.button
                          key={value}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => togglePricing(value)}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                            selectedPricing.includes(value)
                              ? "bg-purple-500 text-white shadow-lg shadow-purple-500/25"
                              : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                          }`}
                        >
                          {selectedPricing.includes(value) && (
                            <FaCheck className="w-3 h-3" />
                          )}
                          {label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {filteredTools.length}
              <span className="text-gray-400 text-lg font-normal ml-2">
                {filteredTools.length === 1 ? "Tool" : "Tools"} Found
              </span>
            </h2>
          </div>

          <AnimatePresence>
            {hasActiveFilters && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex flex-wrap gap-2 mt-4 sm:mt-0"
              >
                {searchQuery && (
                  <span className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 text-sm px-3 py-1.5 rounded-full border border-purple-500/20">
                    🔍 "{searchQuery}"
                    <button onClick={() => setSearchQuery("")}>
                      <FaTimes className="w-3 h-3 hover:text-white" />
                    </button>
                  </span>
                )}
                {selectedCategories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 text-sm px-3 py-1.5 rounded-full border border-purple-500/20"
                  >
                    {category}
                    <button onClick={() => toggleCategory(category)}>
                      <FaTimes className="w-3 h-3 hover:text-white" />
                    </button>
                  </span>
                ))}
                {selectedPricing.map((price) => (
                  <span
                    key={price}
                    className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-300 text-sm px-3 py-1.5 rounded-full border border-purple-500/20"
                  >
                    {price}
                    <button onClick={() => togglePricing(price)}>
                      <FaTimes className="w-3 h-3 hover:text-white" />
                    </button>
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Tools Grid/List */}
        <AnimatePresence mode="wait">
          {filteredTools.length > 0 ? (
            <motion.div
              key={viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "flex flex-col gap-4"
              }
            >
              {filteredTools.map((item: Tool, index: number) => {
                const pricing = getPricingBadge(item);
                return (
                  <motion.div
                    key={`${item.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredCard(item.name)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {viewMode === "grid" ? (
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-lg font-bold text-white group-hover:scale-110 transition-transform">
                                {item.name.charAt(0)}
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                                  {item.name}
                                </h3>
                                <span
                                  className={`text-xs px-2 py-0.5 rounded-full font-medium bg-${pricing.color}-500/10 text-${pricing.color}-400`}
                                >
                                  {pricing.text}
                                </span>
                              </div>
                            </div>
                            <button className="p-2 bg-white/5 hover:bg-purple-500/20 rounded-lg text-gray-400 hover:text-purple-400 transition-all">
                              <FaExternalLinkAlt className="w-4 h-4" />
                            </button>
                          </div>

                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-400 border border-white/10">
                              {item.category}
                            </span>
                            {item.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 bg-purple-500/5 rounded-lg text-xs text-purple-400 border border-purple-500/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-white/10">
                            <button
                              onClick={() =>
                                setLikedTools((prev) => {
                                  const newSet = new Set(prev);
                                  newSet.has(item.name)
                                    ? newSet.delete(item.name)
                                    : newSet.add(item.name);
                                  return newSet;
                                })
                              }
                              className={`flex items-center gap-1 transition-colors ${
                                likedTools.has(item.name)
                                  ? "text-pink-400"
                                  : "text-gray-400 hover:text-pink-400"
                              }`}
                            >
                              <FaHeart className="w-4 h-4" />
                              <span className="text-sm">{item.likes}</span>
                            </button>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <FaStar
                                  key={i}
                                  className={`w-3 h-3 ${i < Math.floor(item.likes / 100) ? "text-amber-400" : "text-gray-600"}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all"
                      >
                        <div className="flex items-center gap-6 p-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                            {item.name.charAt(0)}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                                {item.name}
                              </h3>
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium bg-${pricing.color}-500/10 text-${pricing.color}-400 border border-${pricing.color}-500/20`}
                              >
                                {pricing.text}
                              </span>
                            </div>
                            <p className="text-gray-400 mb-3 line-clamp-2">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                                {item.category}
                              </span>
                              {item.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-purple-500/5 rounded-full text-xs text-purple-400 border border-purple-500/10"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-400">
                              <FaHeart className="text-pink-400" />
                              <span className="text-sm">{item.likes}</span>
                            </div>
                            <button className="p-3 bg-purple-500/10 hover:bg-purple-500 text-purple-400 hover:text-white rounded-xl transition-all">
                              <FaExternalLinkAlt className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-white/5 rounded-2xl border border-white/10"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                No tools found
              </h3>
              <p className="text-gray-400 max-w-md mx-auto mb-8">
                We couldn't find any tools matching your criteria. Try adjusting
                your filters or search terms.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-medium transition-colors shadow-lg shadow-purple-500/25"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg shadow-purple-500/25 transition-colors z-50"
          >
            <FaArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tools;
