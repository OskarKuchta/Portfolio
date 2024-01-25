import { useEffect } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import "./App.css";
import { SectionAnimationResult, SectionProps } from "./Types";



const useSectionAnimation = (): SectionAnimationResult => {
  const controls: AnimationControls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    delay: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};

const Section: React.FC<SectionProps> = ({ Component, name }) => {
  const { ref, controls, inView } = useSectionAnimation();

  useEffect(() => {
    if (inView) {
      console.log(`${name} is in view!`);
    }
  }, [inView, name]);

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
};

const App: React.FC = () => {
  const sections: SectionProps[] = [
    { Component: Home, name: "Home" },
    { Component: About, name: "About" },
    { Component: Skills, name: "Skills" },
    { Component: Work, name: "Work" },
    { Component: Contact, name: "Contact" },
  ];

  return (
    <main className="bg-[#0a192f]">
      <Navbar />
      {sections.map(({ Component, name }) => (
        <Section key={name} Component={Component} name={name} />
      ))}
    </main>
  );
};

export default App;
