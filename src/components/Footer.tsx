"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  // Variants para animação suave dos itens do footer
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-black text-white pt-10 pb-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Coluna 1 */}
        <motion.div variants={itemVariants}>
          <img
            src="https://i.ibb.co/9v3KdxX/Design-sem-nome-1.png" 
            alt="Logo"
            className="h-12 mb-4"
          />
          <p className="text-sm text-gray-400">Grace Kelly</p>
        </motion.div>

        {/* Coluna 2 */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-4">Sobre</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Massoterapeuta<br />
            Boiçucanga<br />
            São Sebastião<br />
            (12) 98844-2045
          </p>
        </motion.div>

        {/* Coluna 3 */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li className="hover:text-gray-200 transition-colors cursor-pointer">
              Sobre
            </li>
            <li className="hover:text-gray-200 transition-colors cursor-pointer">
              Serviços
            </li>
            <li className="hover:text-gray-200 transition-colors cursor-pointer">
              Contato
            </li>
            <li className="hover:text-gray-200 transition-colors cursor-pointer">
              Parceria
            </li>
          </ul>
        </motion.div>

        {/* Coluna 4 */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-bold mb-4">Social</h3>
          <ul className="space-y-2">
            <li>
              {/* Exemplo de link com ícone */}
              <a
                href="https://www.instagram.com/ondas.relaxantes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <FaInstagram />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 flex items-center gap-2 hover:text-gray-200 transition-colors"
              >
                <FaFacebookF />
                Facebook
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Linha divisória e Copyright */}
      <hr className="mt-8 mb-4 border-gray-700" />
      <div className="text-center text-sm text-gray-500">
        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="leading-relaxed"
        >
          © {new Date().getFullYear()} Grace Kelly. Todos os direitos reservados.
        </motion.p>
      </div>
    </motion.footer>
  );
}
