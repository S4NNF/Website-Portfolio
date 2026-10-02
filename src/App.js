import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);

  // Aktifkan mode gelap Bootstrap agar teks, link, dan form ikut gelap
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="layout">
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Buka menu">☰</button>
      <Sidebar open={open} onNavigate={go} />
      <main className="content">
        <Home onNavigate={go} />
        <About onNavigate={go} />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}