import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="w-full pt-32" id="home">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Oskar Kuchta
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a &lt;
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1500,
              "React Passionate",
              1500,
              "Fan of playing chess",
              1500,
              "Guy who you need at work",
              1500,
            ]}
            cursor={false}
            speed={50}
            className="text-3xl sm:text-6xl font-bold text-[#46E258]"
          />
          &nbsp; /&gt;
        </h2>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a front-end developer specializing in building exceptional digital
          experiences. Currently, I’m focused on building responsive front-end
          web applications.
        </p>
        <Link
          to="projects"
          duration={1000}
          smooth={true}
          className="text-white border-2 px-6 py-3 my-2 flex w-[180px] hover:bg-pink-600 hover:border-pink-600 duration-300"
        >
          View Projects
          <HiArrowNarrowRight className="ml-3 " />
        </Link>
      </div>
    </div>
  );
};

export default Home;
