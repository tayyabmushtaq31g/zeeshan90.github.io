import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/zeeshan-portfolio/experience" element={<Experience />} />
        <Route path="/zeeshan-portfolio/skills" element={<Skills />} />
        <Route path="/zeeshan-portfolio/projects" element={<Projects />} />
        <Route path="/zeeshan-portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
