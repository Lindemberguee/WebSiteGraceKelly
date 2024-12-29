"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MassageGrid() {
  const services = [
    {
      title: "Drenagem Linfática",
      description:
        "Elimina toxinas, estimula a circulação e promove relaxamento.",
      image: "https://i.ibb.co/PTJ3XVy/dregagem.jpg",
    },
    {
      title: "Massagem Relaxante",
      description:
        "Alivia o estresse, reduz tensões musculares e proporciona um relaxamento profundo.",
      image: "https://i.ibb.co/VgRVnGp/Massagem-Relaxante.webp",
    },
    {
      title: "Massagem Desportiva",
      description:
        "Acelera a recuperação muscular, melhora a flexibilidade e previne lesões.",
      image: "https://i.ibb.co/YRj9sfK/Massagem-esportiva-sao-paulo.jpg",
    },
    {
      title: "Massagem para Grávidas",
      description:
        "Alivia dores lombares e melhora a circulação, garantindo maior conforto durante a gestação.",
      image: "https://i.ibb.co/vsdPJ3D/massagem-relaxante-para-gravidas.jpg",
    },
    {
      title: "Massagem com Pedras Quentes",
      description:
        "Harmoniza a energia, alivia dores e promove um relaxamento profundo por meio do calor das pedras.",
      image: "https://i.ibb.co/sCPG9vj/stones-g3931aeb96-1280-1-1024x682.jpg",
    },
    {
      title: "Massagem com Ventosa",
      description:
        "Melhora a circulação sanguínea, reduz tensões musculares e ajuda a eliminar toxinas do organismo.",
      image: "https://i.ibb.co/C1rw9vz/spa-urbano-bellary-8p.jpg",
    },
    {
      title: "Massagem com Esfoliação Corporal",
      description:
        "Remove células mortas, renova a pele e estimula a regeneração, deixando-a macia e revitalizada.",
      image: "https://i.ibb.co/d6GWgCC/Esfoliacao-2.jpg",
    },
    {
      title: "Massagem com Drenagem Facial",
      description:
        "Descongestiona, tonifica e ilumina a pele do rosto, promovendo um aspecto mais radiante.",
      image: "https://i.ibb.co/NmWr5mW/Drenagem.jpg",
    },
    {
      title: "Massagem Domicílio",
      description:
        "Receba um cuidado personalizado e relaxante no conforto da sua própria casa.",
      image: "https://i.ibb.co/gwTT7r5/Domincilio.jpg",
    },
    {
      title: "Spa Reflexologia",
      description:
        "Estimula pontos reflexos, equilibra a energia e proporciona bem-estar para todo o corpo.",
      image: "https://i.ibb.co/kq7s25Z/Reflexora.webp",
    },
  ];

  // Animação para o container (fade in ao entrar na tela)
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
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

  // Animação para cada card (fade + up)
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Título da seção */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Serviços
        </motion.h2>

        {/* Grade de serviços (5 colunas em telas muito grandes) */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title + index}
              variants={cardVariants}
              // Efeito de scale no card
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Container da imagem com overflow-hidden para permitir o blur na imagem */}
              <div className="relative w-full h-32 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-300 group-hover:blur-sm"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>

              <div className="p-3 flex flex-col justify-between h-[calc(100%-128px)]">
                {/* Título */}
                <h3 className="text-md font-semibold mb-1 text-gray-800">
                  {service.title}
                </h3>
                {/* Descrição */}
                <p className="text-xs text-gray-600">
                  {service.description}
                </p>
                {/* Linha decorativa */}
                <div className="mt-2 h-1 w-6 bg-yellow-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
