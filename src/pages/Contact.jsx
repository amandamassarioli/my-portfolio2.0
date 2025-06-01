// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center">
      <motion.h2
        className="text-4xl font-bold mb-8 text-pink-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        className="w-full max-w-xl bg-white/10 p-8 rounded-2xl shadow-md backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="block mb-4">
          <span className="text-sm text-gray-300">Nome</span>
          <input
            type="text"
            className="w-full mt-1 p-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none"
            required />
        </label>

        <label className="block mb-4">
          <span className="text-sm text-gray-300">E-mail</span>
          <input
            type="email"
            className="w-full mt-1 p-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none"
            required />
        </label>

        <label className="block mb-6">
          <span className="text-sm text-gray-300">Mensagem</span>
          <textarea
            className="w-full mt-1 p-2 h-32 rounded bg-white/10 text-white border border-white/20 focus:outline-none"
            required />
        </label>

        <button
          type="submit"
          className="w-full py-2 rounded bg-pink-500 hover:bg-pink-600 text-white font-bold"
        >
          Enviar ✉️
        </button>
      </motion.form>

      <motion.div
        className="flex gap-6 mt-10 text-2xl text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <a
          href="https://github.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:seu@email.com"
          className="hover:text-pink-400 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
