"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url(/images/BgMain.jpg)" }}
    >
      {/* Overlay em gradiente para dar um efeito mais suave */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20" />

      {/* Conteúdo acima do overlay */}
      <div className="relative z-10 max-w-screen-md px-4 md:px-8 text-center flex flex-col items-center">
        {/* Título com animação de Slide + Fade */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold"
        >
          Grace{" "}
          <span className="text-yellow-500">
            Kelly
          </span>
        </motion.h1>

        {/* Subtítulo com animação de Fade */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-2 text-lg md:text-xl"
        >
          Massoterapeuta
        </motion.p>

        {/* Botão com animação de Scale + Fade */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-lg rounded-lg shadow-md"
        >
          Conhecer as Massagens
        </motion.button>
      </div>
    </header>
  );
}
