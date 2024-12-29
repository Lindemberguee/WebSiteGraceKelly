"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Se quiser usar Next/Image:
// import Image from "next/image";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  // Variants para animar o container do menu no modo mobile
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.05 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Variants para animar os itens do menu
  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-16 px-6 flex items-center justify-between
      bg-black bg-opacity-90 text-white shadow-md transition-all duration-300`}
    >
      {/* LOGO */}
      <div className="flex items-center">
        {/* Se estiver usando Next/Image, troque pelo componente <Image /> */}
        <img
          src="https://i.ibb.co/9v3KdxX/Design-sem-nome-1.png"
          alt="Logo"
          className="h-10 w-auto cursor-pointer"
        />
      </div>

      {/* MENU */}
      <nav>
        {/* Ícone hamburguer (visível apenas em telas menores) */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          {["Home", "Sobre", "Serviços", "Contato"].map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer transition-colors duration-300 hover:text-gray-100"
            >
              {item}
              {/* Underline animado */}
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"
              />
            </li>
          ))}
        </ul>

        {/* Menu Mobile com animação */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-4 space-y-4 md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {["Home", "Sobre", "Serviços", "Contato"].map((item) => (
                <motion.li
                  key={item}
                  variants={menuItemVariants}
                  className="cursor-pointer text-white transition-colors duration-300 hover:text-gray-100"
                  onClick={() => setIsOpen(false)} // Fecha o menu ao clicar em um item
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
