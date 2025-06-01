// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ⬅️ Importa a navbar
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar /> {/* ⬅️ Navbar fora das rotas, aparece em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

