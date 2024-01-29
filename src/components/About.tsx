import react from "/react.png";

const About = () => {
  return (
    <div className="w-full h-screen text-gray-300" id="about">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#46E258]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-center sm:text-right text-4xl font-bold">
            <p>Hi. I'm Oskar Kuchta, nice to meet you.</p>
          </div>
          <div className="flex flex-col-reverse sm:flex-col">
            <img
              src={react}
              className="react-icon w-20 mt-12 sm:mt-[-140px] mx-auto mb-12"
            />
            <p className="text-center sm:text-left">
              I'm passionate about building excellent software that improves the
              lives of those around me. In my free time I also like to run and
              play chess.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
