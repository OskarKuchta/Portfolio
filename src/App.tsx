import React from "react";
import { SectionProvider } from "./context/SectionProvider";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./App.css";

const App: React.FC = () => {
  return (
    <SectionProvider>
      <main className="bg-[#0a192f] pb-16">
        <Navbar />
        <Section Component={Home} name="Home" />
        <Section Component={About} name="About" />
        <Section Component={Skills} name="Skills" />
        <Section Component={Projects} name="Projects" />
        <Section Component={Contact} name="Contact" />
      </main>
    </SectionProvider>
  );
};

export default App;
