"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCode,
  FaDollarSign,
  FaRobot,
  FaImage,
  FaVideo,
  FaArrowRight,
  FaStar,
  FaFire,
  FaRocket,
  FaCrown,
  FaHeart,
  FaBookmark,
  FaShareAlt,
  FaUsers,
  FaChartLine,
  FaCheckCircle,
  FaLayerGroup,
  FaTrophy,
  FaGem,
  FaBolt,
  FaGlobe
} from "react-icons/fa";

// Types
interface Collection {
  id: string;
  title: string;
  description: string;
  icon: any;
  gradient: string;
  color: string;
  toolCount: number;
  rating: number;
  users: string;
  featured: boolean;
  popularTools: string[];
  tags: string[];
  growth: string;
}

// Collections data
const collectionsData: Collection[] = [
  {
    id: "developers",
    title: "Best AI for Developers",
    description: "Top AI tools and assistants for coding, debugging, and accelerating development workflows",
    icon: FaCode,
    gradient: "from-purple-500 to-pink-500",
    color: "purple",
    toolCount: 25,
    rating: 4.9,
    users: "500K+",
    featured: true,
    popularTools: ["GitHub Copilot", "Cursor", "Tabnine", "Codeium"],
    tags: ["Coding", "Development", "Productivity"],
    growth: "+234%"
  },
  {
    id: "free",
    title: "Best Free AI Tools",
    description: "Powerful AI tools that are completely free to use with no hidden costs",
    icon: FaDollarSign,
    gradient: "from-emerald-500 to-teal-500",
    color: "green",
    toolCount: 40,
    rating: 4.8,
    users: "1M+",
    featured: true,
    popularTools: ["ChatGPT Free", "Claude", "Bing AI", "Perplexity"],
    tags: ["Free", "Budget", "Essential"],
    growth: "+189%"
  },
  {
    id: "chatbots",
    title: "Best Chatbots",
    description: "Advanced conversational AI assistants for customer service, content, and more",
    icon: FaRobot,
    gradient: "from-blue-500 to-cyan-500",
    color: "blue",
    toolCount: 30,
    rating: 4.7,
    users: "2M+",
    featured: true,
    popularTools: ["ChatGPT", "Claude", "Gemini", "Pi"],
    tags: ["Conversation", "Assistant", "NLP"],
    growth: "+312%"
  },
  {
    id: "image-generators",
    title: "Best AI Image Generators",
    description: "Create stunning visuals, artwork, and designs with state-of-the-art AI image generation",
    icon: FaImage,
    gradient: "from-pink-500 to-rose-500",
    color: "pink",
    toolCount: 20,
    rating: 4.9,
    users: "5M+",
    featured: false,
    popularTools: ["Midjourney", "DALL-E 3", "Stable Diffusion", "Leonardo"],
    tags: ["Art", "Design", "Creative"],
    growth: "+167%"
  },
  {
    id: "video-tools",
    title: "Best AI Video Tools",
    description: "Professional AI video creation, editing, and enhancement platforms",
    icon: FaVideo,
    gradient: "from-orange-500 to-red-500",
    color: "orange",
    toolCount: 18,
    rating: 4.6,
    users: "800K+",
    featured: false,
    popularTools: ["Runway ML", "Synthesia", "Pictory", "HeyGen"],
    tags: ["Video", "Creative", "Editing"],
    growth: "+445%"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

export const PopularCollections = () => {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [hoveredCollection, setHoveredCollection] = useState<string | null>(null);
  const [likedCollections, setLikedCollections] = useState<Set<string>>(new Set());
  const [bookmarkedCollections, setBookmarkedCollections] = useState<Set<string>>(new Set());

  const handleLike = (id: string) => {
    setLikedCollections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleBookmark = (id: string) => {
    setBookmarkedCollections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="relative min-h-screen  py-20 overflow-hidden"id="collections">
   
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
            <FaTrophy className="text-yellow-400 w-4 h-4" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Curated Collections
            </span>
            <FaStar className="text-purple-400 w-4 h-4" />
          </motion.div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Popular Collections
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Hand-picked collections of the best AI tools for every use case.
            Find the perfect tools curated by our experts.
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
              { icon: FaLayerGroup, label: "Collections", value: collectionsData.length },
              { icon: FaRocket, label: "Total Tools", value: collectionsData.reduce((sum, c) => sum + c.toolCount, 0) },
              { icon: FaStar, label: "Avg Rating", value: "4.8/5" },
              { icon: FaUsers, label: "Total Users", value: "9M+" },
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
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {collectionsData.map((collection, index) => (
              <motion.div
                key={collection.id}
                layout
                onMouseEnter={() => setHoveredCollection(collection.id)}
                onMouseLeave={() => setHoveredCollection(null)}
                onClick={() => setSelectedCollection(
                  selectedCollection === collection.id ? null : collection.id
                )}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`group relative bg-white/5 backdrop-blur-sm border rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    selectedCollection === collection.id
                      ? "border-purple-500/50 shadow-2xl shadow-purple-500/20"
                      : "border-white/10 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10"
                  }`}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Featured Badge */}
                  {collection.featured && (
                    <div className="absolute top-6 right-6 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-xs font-bold shadow-lg"
                      >
                        <FaCrown className="w-3 h-3" />
                        Featured
                      </motion.div>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start gap-5 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-20 h-20 bg-gradient-to-br ${collection.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <collection.icon className="w-10 h-10 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                          {collection.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                          {collection.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="p-3 bg-white/5 rounded-xl text-center">
                        <div className="text-lg font-bold text-white">{collection.toolCount}</div>
                        <div className="text-xs text-gray-400">Tools</div>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl text-center">
                        <div className="text-lg font-bold text-yellow-400 flex items-center justify-center gap-1">
                          <FaStar className="w-4 h-4" />
                          {collection.rating}
                        </div>
                        <div className="text-xs text-gray-400">Rating</div>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl text-center">
                        <div className="text-lg font-bold text-emerald-400">{collection.growth}</div>
                        <div className="text-xs text-gray-400">Growth</div>
                      </div>
                    </div>

                    {/* Popular Tools */}
                    <div className="space-y-3 mb-6">
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider flex items-center gap-2">
                        <FaRocket className="w-3 h-3" />
                        Popular Tools
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {collection.popularTools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-purple-500/30 hover:text-white transition-all"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {collection.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 bg-gradient-to-r ${collection.gradient} bg-opacity-10 rounded-full text-xs text-white border border-white/10`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 px-6 py-3 bg-gradient-to-r ${collection.gradient} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2`}
                      >
                        Explore Collection
                        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(collection.id);
                        }}
                        className={`p-3 rounded-xl transition-all ${
                          likedCollections.has(collection.id)
                            ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        <FaHeart className={`w-4 h-4 ${likedCollections.has(collection.id) ? 'animate-pulse' : ''}`} />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookmark(collection.id);
                        }}
                        className={`p-3 rounded-xl transition-all ${
                          bookmarkedCollections.has(collection.id)
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                        }`}
                      >
                        <FaBookmark className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {selectedCollection === collection.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 mt-6 border-t border-white/10">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="p-4 bg-white/5 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                  <FaUsers className="text-purple-400 w-4 h-4" />
                                  <span className="text-sm text-gray-400">Active Users</span>
                                </div>
                                <div className="text-2xl font-bold text-white">{collection.users}</div>
                              </div>
                              <div className="p-4 bg-white/5 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                  <FaChartLine className="text-emerald-400 w-4 h-4" />
                                  <span className="text-sm text-gray-400">Monthly Growth</span>
                                </div>
                                <div className="text-2xl font-bold text-emerald-400">{collection.growth}</div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <h4 className="text-sm font-semibold text-white">Why We Recommend This Collection</h4>
                              <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-gray-400">
                                  <FaCheckCircle className="text-emerald-400 w-4 h-4 mt-0.5 flex-shrink-0" />
                                  Carefully curated by our team of AI experts
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-400">
                                  <FaCheckCircle className="text-emerald-400 w-4 h-4 mt-0.5 flex-shrink-0" />
                                  Updated weekly with new tools and reviews
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-400">
                                  <FaCheckCircle className="text-emerald-400 w-4 h-4 mt-0.5 flex-shrink-0" />
                                  Includes both free and premium options
                                </li>
                              </ul>
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
            <span className="text-gray-400 pl-4 py-2">Want to see more collections?</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center gap-2"
            >
              View All Collections
              <FaArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PopularCollections;