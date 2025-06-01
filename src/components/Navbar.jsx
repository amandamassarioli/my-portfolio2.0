// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 w-full bg-black bg-opacity-80 text-white z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-400">MeuPortfólio</h1>
        <ul className="flex space-x-6 text-sm md:text-base">
          <li><Link to="/" className="hover:text-purple-300 transition">Início</Link></li>
          <li><Link to="/about" className="hover:text-purple-300 transition">Sobre</Link></li>
          <li><Link to="/projects" className="hover:text-purple-300 transition">Projetos</Link></li>
          <li><Link to="/contact" className="hover:text-purple-300 transition">Contato</Link></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
