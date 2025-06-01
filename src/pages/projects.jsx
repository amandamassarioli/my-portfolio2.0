// src/pages/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "CubeSat Explorer",
    description: "Um projeto conceitual de CubeSat que simula comunicação espacial e coleta de dados.",
    tech: ["React", "Three.js", "Framer Motion"],
  },
  {
    title: "Sistema Solar Interativo",
    description: "Site educativo com animações suaves sobre planetas, constelações e o universo.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Blog Universo Criativo",
    description: "Blog pessoal com reflexões sobre ciência, arte e tecnologia.",
    tech: ["Next.js", "Notion API", "Vercel"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-12">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-cyan-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-cyan-800/50 text-sm px-3 py-1 rounded-full text-cyan-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
