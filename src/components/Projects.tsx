const ProjectCard = (props: { name: string; src: string; alt: string }) => {
  const { name, src, alt } = props;

  return (
    <div className="w-full h-80  p-10 flex flex-col items-center border border-gray-300 rounded bg-[#102341]">
      <h2>{name}</h2>
      <img src={src} alt={alt} className="mt-4 h-32" />
      <div className="mt-6">
        <button className="text-sm mr-2">Live site</button>
        <button className="text-sm">GitHub code</button>
      </div>
    </div>
  );
};

const projects = [
  {
    name: "Phone Paradise",
    src: "https://raw.githubusercontent.com/OskarKuchta/PhoneParadise/main/public/result1.webp",
    alt: "Phone Paradise project photo",
  },
  {
    name: "Dobry Klan",
    src: "https://github.com/OskarKuchta/DobryKlanCoc/blob/main/public/result1.png?raw=true",
    alt: "Dobry Klan project photo",
  },
  {
    name: "Projekt Rower",
    src: "https://github.com/OskarKuchta/ProjectRower/blob/main/public/home-background.jpg?raw=true",
    alt: "Projekt Rower project photo",
  },
  {
    name: "Country Informator",
    src: "https://github.com/OskarKuchta/Country-Infromator/blob/main/app/public/result1.png?raw=true",
    alt: "Country Informator project photo",
  },
  {
    name: "React Quiz",
    src: "https://github.com/OskarKuchta/React-Quiz/blob/main/app/public/result2.png?raw=true",
    alt: "React Quiz project photo",
  },
];

const Projects = () => {
  return (
    <div className="w-full md:h-screen text-gray-300 pt-24 my-24" id="projects">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#46E258]">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-8 text-white">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
