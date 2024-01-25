import { Button } from "react-scroll";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const buttonClassName =
    "mx-2 px-4 py-1 hover:bg-pink-600 focus:bg-pink-600 focus:border-pink-600 focus:outline-white duration-300 rounded-sm";

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
            className={buttonClassName}
            smooth={true}
            duration={1000}
          >
            Home
          </Button>
        </li>
        <li>
          <Button
            to="about"
            className={buttonClassName}
            smooth={true}
            duration={1000}
          >
            About
          </Button>
        </li>
        <li>
          <Button
            to="skills"
            className={buttonClassName}
            smooth={true}
            duration={1000}
          >
            Skills
          </Button>
        </li>
        <li>
          <Button
            to="projects"
            className={buttonClassName}
            smooth={true}
            duration={1000}
          >
            Projects
          </Button>
        </li>
        <li>
          <Button
            to="contact"
            className={buttonClassName}
            smooth={true}
            duration={1000}
          >
            Contact
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
