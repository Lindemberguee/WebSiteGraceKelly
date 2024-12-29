"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-3">
      {/* Botão de WhatsApp */}
      <motion.a
        href="https://wa.me/5512988442045" // Substitua pelo seu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp size={22} />
      </motion.a>

      {/* Botão de Instagram */}
      <motion.a
        href="https://www.instagram.com/ondas.relaxantes/" // Substitua pela sua conta
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-pink-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaInstagram size={22} />
      </motion.a>
    </div>
  );
}
