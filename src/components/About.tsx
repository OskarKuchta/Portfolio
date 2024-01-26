const About = () => {
  return (
    <div className="w-full h-[80vh] text-gray-300" id="about">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Oskar Kuchta, nice to meet you.</p>
          </div>
          <div>
            <p>
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
