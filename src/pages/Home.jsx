// src/pages/Home.jsx
import StarsCanvas from "../components/StarsCanvas";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <StarsCanvas />
      
      {/* Conteúdo Central */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Hello, <br />
          I am <span className="text-cyan-400">Amanda</span>,<br />
          Front End Developer
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Creating immersive websites & blending creativity, design, and tech.
        </p>
        <Link
          to="/about"
          className="mt-8 px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
        >
          Let’s get to know!
        </Link>
      </div>
    </div>
  );
};

export default Home;
