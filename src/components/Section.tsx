import { useEffect } from "react";
import { motion, useAnimation, AnimationControls } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSectionContext } from "../Hooks/useSectionContext";
import { SectionAnimationResult, SectionProps } from "../Types";



const useSectionAnimation = (): SectionAnimationResult => {
  const controls: AnimationControls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    delay: 0.3,
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
  const { setCurrentSection } = useSectionContext();

  useEffect(() => {
    if (inView) {
      setCurrentSection(name);
    }
  }, [inView, name, setCurrentSection]);

  return (
    <motion.div
      key={name}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      <Component />
    </motion.div>
  );
};

export default Section;
