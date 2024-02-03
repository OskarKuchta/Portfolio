import { FaGithub } from "react-icons/fa";
import { FaDisplay } from "react-icons/fa6";
import { ProjectCardProps } from "../Types";

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  src,
  alt,
  liveHref,
  githubHref,
}) => {
  return (
    <div className="p-8 flex flex-col items-center border border-gray-300 rounded bg-[#102341]">
      <h2 className="text-base lg:text-2xl text-center">{name}</h2>
      <div className="mt-4 max-h-28 overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="h-36 duration-500 hover:scale-125"
        />
      </div>
      <div className="pt-8 flex justify-center items-center ml-2">
        <a
          href={liveHref}
          className="projects-button-container flex flex-col text-sm justify-center items-center mr-12 hover:border-2 hover:border-white focus:border-2 focus:border-white outline-none py-[6px] px-2 hover:rounded focus:rounded"
          target="blank"
        >
          <FaDisplay size={25} className="projects-icon" />
          <p className="mt-1 text-center">Live site</p>
        </a>
        <a
          href={githubHref}
          className="projects-button-container flex flex-col text-sm justify-center p-[6px] items-center hover:border-2 hover:border-white focus:border-2 focus:border-white outline-none hover:rounded focus:rounded"
          target="blank"
        >
          <FaGithub size={25} className="projects-icon" />
          <p className="mt-1 text-center">Github code</p>
        </a>
      </div>
    </div>
  );
};

const projects: ProjectCardProps[] = [
  {
    name: "Phone Paradise",
    src: "https://raw.githubusercontent.com/OskarKuchta/PhoneParadise/main/public/result1.webp",
    alt: "Phone Paradise project photo",
    liveHref: "https://phoneparadise.netlify.app/",
    githubHref: "https://github.com/OskarKuchta/PhoneParadise",
  },
  {
    name: "Dobry Klan",
    src: "https://github.com/OskarKuchta/DobryKlanCoc/blob/main/public/result1.png?raw=true",
    alt: "Dobry Klan project photo",
    liveHref: "https://dobry-klan.netlify.app/",
    githubHref: "https://github.com/OskarKuchta/DobryKlanCoc",
  },
  {
    name: "Projekt Rower",
    src: "https://github.com/OskarKuchta/ProjectRower/blob/main/public/home-background.jpg?raw=true",
    alt: "Projekt Rower project photo",
    liveHref: "https://projektrower.netlify.app/",
    githubHref: "https://github.com/OskarKuchta/ProjectRower",
  },
  {
    name: "Country Informator",
    src: "https://github.com/OskarKuchta/Country-Infromator/blob/main/public/result1.png?raw=true",
    alt: "Country Informator project photo",
    liveHref: "https://oskaprojects.ct8.pl/Country-Informator/dist/",
    githubHref: "https://github.com/OskarKuchta/Country-Infromator",
  },
  {
    name: "React Quiz",
    src: "https://github.com/OskarKuchta/React-Quiz/blob/main/app/public/result2.png?raw=true",
    alt: "React Quiz project photo",
    liveHref: "https://oskaprojects.ct8.pl/React-Quiz/dist/",
    githubHref: "https://github.com/OskarKuchta/React-Quiz",
  },
];

const Projects = () => {
  return (
    <div className="text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#46E258] pt-48"
            id="projects"
          >
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-8 text-white">
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
