import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import { useSectionContext } from "../Hooks/useSectionContext";
import { useEffect, useState } from "react";

const Home = () => {
  const { currentSection } = useSectionContext();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const delay: number = 3000;

    const timeoutId: React.ReactNode = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="w-full pt-40 h-screen" id="home">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
        <p className="text-[#46E258]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Oskar Kuchta
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a &lt;
          {currentSection === "Home" && isVisible ? (
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "React Passionate",
                1500,
                "Fan of playing chess",
                1500,
                "Guy who you need in work",
                1500,
              ]}
              cursor={false}
              speed={15}
              className="text-3xl sm:text-6xl font-bold text-[#46E258]"
            />
          ) : null}
          &nbsp; /&gt;
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a front-end developer specializing in building exceptional digital
          experiences. Currently, I’m focused on building responsive front-end
          web applications main in React.
        </p>
        <a
          href="#projects"
          className="text-white border-2 px-6 py-3 my-2 flex w-[180px] hover:bg-[#46E258] hover:border-[#46E258] focus:bg-[#46E258] focus:border-[#46E258] focus:outline-white duration-300 rounded-sm"
        >
          View Projects
          <HiArrowNarrowRight className="ml-3 " />
        </a>
      </div>
    </div>
  );
};

export default Home;
