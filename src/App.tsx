import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import "./App.css";

const useSectionAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return { ref, controls };
};

const App = () => {
  const sections = [
    { Component: Home, name: "Home" },
    { Component: About, name: "About" },
    { Component: Skills, name: "Skills" },
    { Component: Work, name: "Work" },
    { Component: Contact, name: "Contact" },
  ];

  return (
    <main className="bg-[#0a192f]">
      <Navbar />
      {sections.map(({ Component, name }, index) => {
        const { ref, controls } = useSectionAnimation();

        return (
          <motion.div
            key={name}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <Component />
          </motion.div>
        );
      })}
    </main>
  );
};

export default App;
