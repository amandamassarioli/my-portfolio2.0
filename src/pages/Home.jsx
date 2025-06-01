// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white flex flex-col justify-center items-center px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 text-center text-purple-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, my name is Amanda
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Desenvolvedora criativa apaixonada por construir experiências digitais
        com propósito, beleza e um toque de imaginação 🚀
      </motion.p>

      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <Link
          to="/projects"
          className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-full transition-all duration-300 shadow-md hover:shadow-purple-500/40"
        >
          Projetos
        </Link>
        <Link
          to="/contact"
          className="border border-purple-400 text-purple-300 px-6 py-2 rounded-full hover:bg-purple-800 transition-all duration-300"
        >
          Contact me 
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
