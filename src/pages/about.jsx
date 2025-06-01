// src/pages/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-red-500 text-white flex flex-col justify-center items-center px-6 py-12">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-purple-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl text-gray-200 text-lg leading-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Desde pequena, sempre fui fascinada pelo espaço, pela imaginação e pelas infinitas possibilidades criativas. Hoje, canalizo essa paixão construindo experiências digitais únicas — misturando programação, arte e curiosidade científica.  
        <br /><br />
        Meu objetivo é criar com propósito, autenticidade e impacto — e levar um pouco do universo em cada projeto 🚀🌌
      </motion.p>
    </section>
  );
};

export default About;

