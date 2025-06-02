// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/50 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Nome/Logo */}
        <Link to="/" className="text-cyan-400 font-bold text-xl tracking-widest">
          amanda.dev
        </Link>

        {/* Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-cyan-400 transition">Home</Link>
          <Link to="/about" className="text-white hover:text-cyan-400 transition">About</Link>
          <Link to="/projects" className="text-white hover:text-cyan-400 transition">Projects</Link>
          <Link to="/contact" className="text-white hover:text-cyan-400 transition">Contact</Link>
        </nav>

        {/* Social */}
        <div className="flex space-x-4 text-cyan-400 text-xl">
          <a href="https://github.com/SEU_USUARIO" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/SEU_USUARIO" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
