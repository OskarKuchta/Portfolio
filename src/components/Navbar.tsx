import MobileNavbar from "./MobileNavbar";
import { useSectionContext } from "../Hooks/useSectionContext";

const Navbar = () => {
  const linkClassName =
    "mx-2 px-4 py-1 hover:bg-pink-600 hover:text-gray-300 focus:bg-pink-600 focus:text-gray-300 focus:border-pink-600 focus:outline-white duration-300 rounded-sm";
  const { currentSection } = useSectionContext();

  return (
    <nav className="fixed w-screen h-[72px] flex items-center px-4 bg-[#0a192f] text-gray-300 z-20">
      <div className="w-screen flex items-center justify-between">
        <h2 className="font-grape-nuts text-2xl w-60">Kuchta Oskar</h2>
        <MobileNavbar />
      </div>
      <ul className="hidden md:flex">
        <li>
          <a
            href="#home"
            className={`${
              currentSection === "Home"
                ? `${linkClassName} text-[#46E258]`
                : linkClassName
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`${
              currentSection === "About"
                ? `${linkClassName} text-[#46E258]`
                : linkClassName
            }`}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={`${
              currentSection === "Skills"
                ? `${linkClassName} text-[#46E258]`
                : linkClassName
            }`}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`${
              currentSection === "Projects"
                ? `${linkClassName} text-[#46E258]`
                : linkClassName
            }`}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`${
              currentSection === "Contact"
                ? `${linkClassName} text-[#46E258]`
                : linkClassName
            }`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
