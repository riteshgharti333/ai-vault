"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaArrowRight, 
  FaStar, 
  FaLayerGroup,
  FaDollarSign,
  FaCheckCircle,
  FaGlobe,
  FaBolt,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaPlay,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaCrown,
  FaFire
} from "react-icons/fa";

export const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: FaRocket, label: "AI Tools", value: "200+", gradient: "from-purple-400 to-pink-500" },
    { icon: FaLayerGroup, label: "Categories", value: "15+", gradient: "from-blue-400 to-cyan-500" },
    { icon: FaCheckCircle, label: "Curated", value: "100%", gradient: "from-emerald-400 to-teal-500" },
    { icon: FaDollarSign, label: "Free Access", value: "Free", gradient: "from-amber-400 to-orange-500" },
  ];

  const floatingIcons = [
    { icon: FaBolt, className: "top-20 left-[10%] animate-float-slow", size: "w-8 h-8" },
    { icon: FaStar, className: "top-40 right-[15%] animate-float-medium", size: "w-6 h-6" },
    { icon: FaFire, className: "bottom-32 left-[20%] animate-float-fast", size: "w-5 h-5" },
    { icon: FaShieldAlt, className: "top-28 right-[25%] animate-float-slow", size: "w-7 h-7" },
    { icon: FaGlobe, className: "bottom-20 right-[10%] animate-float-medium", size: "w-6 h-6" },
    { icon: FaUsers, className: "top-1/3 left-[5%] animate-float-fast", size: "w-5 h-5" },
  ];

  return (
    <div className="relative min-h-[600px] flex items-center overflow-hidden bg-[#0A0A0F]">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[100px] animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
          }}
          // Using style for delay
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJIMjR2LTJoMTJ6TTM4IDM4SDIydjJoMTZ2LTJ6TTQwIDQySDIwdjJoMjB2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

        {/* Animated Lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
                animation: `slideRight ${3 + i}s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.className} text-purple-400/20`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          <item.icon className={item.size} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm mb-6"
              >
                <FaCrown className="text-yellow-400 w-4 h-4" />
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  #1 AI Tools Directory
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Discover The{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                    AI Vault
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed"
              >
                Explore our curated collection of{" "}
                <span className="text-purple-400 font-semibold">200+ AI tools</span>{" "}
                to boost productivity, enhance creativity, and streamline workflows.
                All handpicked and verified by our team of experts.
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
              >
                {["Verified Tools", "Daily Updates", "Expert Reviews", "Free Access"].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <FaCheckCircle className="text-purple-400 w-4 h-4" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore All Tools
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-purple-500/30 text-white rounded-2xl font-semibold hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaRocket className="w-4 h-4" />
                  Submit Your Tool
                </motion.button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-8 flex items-center gap-6 justify-center lg:justify-start"
              >
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-[#0A0A0F] flex items-center justify-center text-xs font-bold text-white"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 border-2 border-[#0A0A0F] flex items-center justify-center text-xs text-purple-400">
                    +2K
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  <span className="text-purple-400 font-semibold">2,000+</span> happy users
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Animated Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main Stats Card */}
              <motion.div
                animate={{
                  y: isHovered ? -10 : 0,
                  rotateX: isHovered ? 5 : 0,
                  rotateY: isHovered ? -5 : 0,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center"
                    >
                      <FaRocket className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">AI Vault</h3>
                      <p className="text-gray-400">Curated Tools Directory</p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all"
                      >
                        <stat.icon className={`w-6 h-6 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`} />
                        <div className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Tools Added This Week</span>
                      <span className="text-purple-400">+12</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <FaChartLine className="text-purple-400 w-5 h-5" />
                  <div>
                    <div className="text-white font-bold">+45%</div>
                    <div className="text-xs text-gray-400">Monthly Growth</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <FaStar className="text-yellow-400 w-5 h-5" />
                  <div>
                    <div className="text-white font-bold">4.9/5</div>
                    <div className="text-xs text-gray-400">User Rating</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: FaGithub, label: "Open Source", value: "50+" },
              { icon: FaTwitter, label: "Followers", value: "10K+" },
              { icon: FaDiscord, label: "Community", value: "5K+" },
              { icon: FaGlobe, label: "Countries", value: "100+" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <item.icon className="w-4 h-4 text-purple-400" />
                <div className="text-sm">
                  <span className="text-white font-semibold">{item.value}</span>{" "}
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};