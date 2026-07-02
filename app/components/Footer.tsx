"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaRocket, 
  FaArrowRight, 
  FaStar, 
  FaHeart,
  FaGithub,
  FaTwitter,
  FaDiscord,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowUp,
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaLayerGroup,
  FaGlobe,
  FaCopyright,
  FaCoffee,
  FaCode,
  FaBookmark,
  FaShareAlt,
  FaThumbsUp,
  FaChartLine
} from "react-icons/fa";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "AI Tools Directory", href: "#", icon: FaRocket },
      { name: "Featured Tools", href: "#", icon: FaStar },
      { name: "Categories", href: "#", icon: FaLayerGroup },
      { name: "Popular Collections", href: "#", icon: FaBookmark },
      { name: "Top Companies", href: "#", icon: FaGlobe },
      { name: "Submit Tool", href: "#", icon: FaArrowRight },
    ]
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Blog", href: "#", icon: FaPenFancy },
      { name: "Newsletter", href: "#", icon: FaEnvelope },
      { name: "Documentation", href: "#", icon: FaCode },
      { name: "API", href: "#", icon: FaBolt },
      { name: "Community", href: "#", icon: FaUsers },
      { name: "Support", href: "#", icon: FaShieldAlt },
    ]
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#", icon: FaUsers },
      { name: "Careers", href: "#", icon: FaRocket },
      { name: "Partners", href: "#", icon: FaHandshake },
      { name: "Press Kit", href: "#", icon: FaShareAlt },
      { name: "Privacy Policy", href: "#", icon: FaShieldAlt },
      { name: "Terms of Service", href: "#", icon: FaCheckCircle },
    ]
  }
};

const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub", color: "hover:text-gray-400" },
  { icon: FaTwitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
  { icon: FaDiscord, href: "#", label: "Discord", color: "hover:text-indigo-400" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: FaYoutube, href: "#", label: "YouTube", color: "hover:text-red-500" },
];

const stats = [
  { icon: FaUsers, value: "50K+", label: "Active Users" },
  { icon: FaRocket, value: "200+", label: "AI Tools" },
  { icon: FaStar, value: "4.9/5", label: "User Rating" },
  { icon: FaGlobe, value: "100+", label: "Countries" },
];

// Missing icon imports
import { FaPenFancy, FaHandshake } from "react-icons/fa";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0A0F] border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Newsletter */}
        <div className="py-16 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Vault
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Get the latest AI tools, tips, and trends delivered straight to your inbox.
                Join 50,000+ subscribers today!
              </p>
              
              {/* Mini Stats */}
              <div className="flex flex-wrap gap-6 mt-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <stat.icon className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="text-white font-bold">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Subscribe to Our Newsletter
                </h3>
                
                {subscribed ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <FaCheckCircle className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-lg font-semibold text-white mb-2">Successfully Subscribed!</h4>
                    <p className="text-gray-400">Thank you for joining our community.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all flex items-center justify-center gap-2"
                    >
                      Subscribe Now
                      <FaArrowRight className="w-4 h-4" />
                    </motion.button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      No spam, unsubscribe anytime. Read our{" "}
                      <a href="#" className="text-purple-400 hover:text-purple-300">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
                >
                  <FaRocket className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Vault
                  </h3>
                  <p className="text-xs text-gray-500">Curated AI Tools Directory</p>
                </div>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Discover the best AI tools curated by experts. From content creation to 
                development, find the perfect AI solution for your needs.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all hover:border-purple-500/30`}
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                {[
                  { icon: FaEnvelope, text: "hello@aivault.com" },
                  { icon: FaMapMarkerAlt, text: "San Francisco, CA" },
                  { icon: FaPhone, text: "+1 (555) 123-4567" },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 * index }}
                    className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    <contact.icon className="w-4 h-4" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Link Columns */}
            {Object.values(footerLinks).map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * (sectionIndex + 1) }}
              >
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <FaLayerGroup className="w-3 h-3 text-purple-400" />
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                      onMouseEnter={() => setHoveredLink(link.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-all group"
                      >
                        <link.icon className={`w-3 h-3 transition-all ${
                          hoveredLink === link.name ? 'text-purple-400 scale-110' : ''
                        }`} />
                        <span className="text-sm">{link.name}</span>
                        {hoveredLink === link.name && (
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: 'auto' }}
                            className="text-purple-400"
                          >
                            <FaArrowRight className="w-3 h-3" />
                          </motion.span>
                        )}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <FaCopyright className="w-3 h-3" />
              <span>{new Date().getFullYear()} AI Vault. All rights reserved.</span>
              <span className="text-gray-600 mx-2">|</span>
              <span className="flex items-center gap-1">
                Made with <FaHeart className="w-3 h-3 text-pink-400 animate-pulse" /> by AI Enthusiasts
              </span>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 text-sm text-gray-400"
            >
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: FaShieldAlt, text: "SSL Secured" },
              { icon: FaCheckCircle, text: "Verified Tools" },
              { icon: FaBolt, text: "Lightning Fast" },
              { icon: FaUsers, text: "50K+ Community" },
            ].map((badge, index) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/30 transition-all"
              >
                <badge.icon className="w-3 h-3 text-purple-400" />
                <span className="text-xs">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all z-50"
      >
        <FaArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;