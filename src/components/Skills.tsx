import HTML from "/html.png";
import CSS from "/css.png";
import JavaScript from "/js.png";
import ReactImg from "/react.png";
import Node from "/node.png";
import FireBase from "/firebase.png";
import GitHub from "/github.png";
import Tailwind from "/tailwind.png";
import Git from "/git.png";
import Sass from "/sass.png";
import Typescript from "/ts.png";
import Redux from "/redux.png";
import Router from "/router.png";
import { SkillsData } from "../Types";

const skillsData: SkillsData[] = [
  { img: HTML, label: "HTML" },
  { img: CSS, label: "CSS" },
  { img: Sass, label: "SASS" },
  { img: Tailwind, label: "TAILWIND" },
  { img: JavaScript, label: "JAVASCRIPT" },
  { img: Typescript, label: "TYPESCRIPT" },
  { img: ReactImg, label: "REACT" },
  { img: Redux, label: "REACT REDUX" },
  { img: Router, label: "REACT ROUTER" },
  { img: Git, label: "GIT" },
  { img: GitHub, label: "GITHUB" },
  { img: FireBase, label: "FIREBASE" },
  { img: Node, label: "NODE JS" },
];

const Skills = () => {
  return (
    <div className=" text-gray-300">
      <div
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-36"
        id="skills"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#46E258]">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8 mb-64">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto my-2"
                src={skill.img}
                alt={skill.label}
              />
              <p className="my-4 text-xs sm:text-base">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
