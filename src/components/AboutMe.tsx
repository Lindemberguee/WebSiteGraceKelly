"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Exemplo de ícones com react-icons (instale com `npm i react-icons` se necessário)
import { FaSpa, FaHotel, FaHandsHelping, FaChalkboardTeacher } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="bg-white">
      {/* CONTAINER GERAL */}
      <div className="container mx-auto px-4 py-16">
        
        {/* BLOCO 1: Introdução (Imagem + Texto) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* IMAGEM COM EFEITO LEVE NO HOVER */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-center">
            <Image
              src="https://i.ibb.co/TR0nXhj/Eu.jpg"
              alt="Sobre mim"
              width={1000}
              height={1000}
              className="object-cover w-full transition-transform duration-300"
            />
            </div>
            
          </motion.div>

          {/* TEXTO DE APRESENTAÇÃO */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Mim</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Olá, meu nome é <span className="text-yellow-500 font-semibold">Grace</span>, tenho{" "}
              <span className="text-yellow-500 font-semibold">34 anos</span> e moro em{" "}
              <span className="text-yellow-500 font-semibold">São Sebastião (SP)</span>. Iniciei minha
              trajetória como massoterapeuta em <span className="text-yellow-500 font-semibold">2019</span> e,
              agora em <span className="text-yellow-500 font-semibold">2025</span>, somo{" "}
              <span className="text-yellow-500 font-semibold">5 anos de experiência</span> na área de
              cuidados corporais e bem-estar.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Durante minha trajetória, atuei em <strong>grandes hotéis</strong>, prestando serviços de massoterapia
              para clientes de diferentes nacionalidades, o que me permitiu aperfeiçoar técnicas de relaxamento
              e aprimorar o atendimento personalizado.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Também integrei o time da <strong>L'Occitane en Provence</strong> em um spa de alto padrão no litoral
              norte de São Paulo e realizei atendimentos na rede <strong>Jacques Janine</strong>. Essas experiências
              me trouxeram uma visão mais ampla sobre protocolos de bem-estar e excelência no atendimento ao cliente.
            </p>
          </div>
        </motion.div>

        {/* DIVISÓRIA */}
        <hr className="my-12 border-gray-200" />

        {/* BLOCO 2: TIMELINE */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
            Minha História e Formação
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Ao longo dos anos, busquei aprimorar meus conhecimentos em diferentes áreas para
            oferecer um atendimento integral, eficaz e de alto padrão.
          </p>

          <div className="relative border-l-4 border-yellow-400 pl-8">
            {/* ITEM 1 */}
            <div className="mb-10 ml-4 relative">
              <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center absolute -left-12">
                <FaHandsHelping className="text-white" />
              </span>
              <p className="text-md font-semibold text-gray-800">2019</p>
              <p className="text-gray-700">
                Iniciei minha carreira em Massoterapia, adquirindo bases sólidas em anatomia e
                técnicas de relaxamento.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="mb-10 ml-4 relative">
              <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center absolute -left-12">
                <FaHotel className="text-white" />
              </span>
              <p className="text-md font-semibold text-gray-800">2020</p>
              <p className="text-gray-700">
                Trabalhei em grandes hotéis, atendendo um público diversificado e desenvolvendo
                ainda mais minhas habilidades.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="mb-10 ml-4 relative">
              <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center absolute -left-12">
                <FaSpa className="text-white" />
              </span>
              <p className="text-md font-semibold text-gray-800">2021</p>
              <p className="text-gray-700">
                Integrei o time da L'Occitane en Provence, onde refinei meus métodos de massagem
                em um spa de alto padrão.
              </p>
            </div>

            {/* ITEM 4 */}
            <div className="mb-10 ml-4 relative">
              <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center absolute -left-12">
                <FaHandsHelping className="text-white" />
              </span>
              <p className="text-md font-semibold text-gray-800">2022</p>
              <p className="text-gray-700">
                Atuei na rede Jacques Janine, aprimorando ainda mais a excelência no atendimento ao cliente.
              </p>
            </div>

            {/* ITEM 5 */}
            <div className="ml-4 relative">
              <span className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center absolute -left-12">
                <FaChalkboardTeacher className="text-white" />
              </span>
              <p className="text-md font-semibold text-gray-800">2023 - 2025</p>
              <p className="text-gray-700">
                Sigo buscando formações complementares e workshops para expandir meu repertório e
                entregar resultados cada vez melhores.
              </p>
            </div>
          </div>
        </motion.div>

        {/* BLOCO 3: ABORDAGEM (Card) */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">Minha Abordagem</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Acredito no potencial transformador de um atendimento humanizado e voltado para as necessidades
            individuais de cada pessoa. Minha abordagem combina:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Avaliação e escuta ativa:</strong> entender o histórico e as demandas de cada pessoa.
            </li>
            <li>
              <strong>Técnicas diversificadas:</strong> uso de massagens relaxantes, drenagem linfática, reflexologia e outras metodologias específicas.
            </li>
            <li>
              <strong>Cuidado integral:</strong> busco promover equilíbrio físico e mental, garantindo resultados duradouros.
            </li>
            <li>
              <strong>Evolução constante:</strong> mantenho-me atualizada em cursos e novas práticas de bem-estar.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
