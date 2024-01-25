import { Button } from "react-scroll";
import MobileNavbar from "./MobileNavbar";
import { useSectionContext } from "../Hooks/useSectionContext";

const Navbar = () => {
  const buttonClassName =
    "mx-2 px-4 py-1 hover:bg-pink-600 hover:text-gray-300 focus:bg-pink-600 focus:text-gray-300 focus:border-pink-600 focus:outline-white duration-300 rounded-sm";
  const { currentSection } = useSectionContext();

  return (
    <nav className="fixed w-screen h-[72px] flex items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="w-screen flex items-center justify-between">
        <h2 className="font-grape-nuts text-2xl w-40">Kuchta Oskar</h2>
        <MobileNavbar />
      </div>
      <ul className="hidden md:flex">
        <li>
          <Button
            to="home"
            className={`${
              currentSection === "Home"
                ? `${buttonClassName} text-[#46E258]`
                : buttonClassName
            }`}
            smooth={true}
            duration={300}
          >
            Home
          </Button>
        </li>
        <li>
          <Button
            to="about"
            className={`${
              currentSection === "About"
                ? `${buttonClassName} text-[#46E258]`
                : buttonClassName
            }`}
            smooth={true}
            duration={300}
          >
            About
          </Button>
        </li>
        <li>
          <Button
            to="skills"
            className={`${
              currentSection === "Skills"
                ? `${buttonClassName} text-[#46E258]`
                : buttonClassName
            }`}
            smooth={true}
            duration={300}
          >
            Skills
          </Button>
        </li>
        <li>
          <Button
            to="projects"
            className={`${
              currentSection === "Projects"
                ? `${buttonClassName} text-[#46E258]`
                : buttonClassName
            }`}
            smooth={true}
            duration={300}
          >
            Projects
          </Button>
        </li>
        <li>
          <Button
            to="contact"
            className={`${
              currentSection === "Contact"
                ? `${buttonClassName} text-[#46E258]`
                : buttonClassName
            }`}
            smooth={true}
            duration={300}
          >
            Contact
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
