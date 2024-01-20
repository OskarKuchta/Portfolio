import { Link } from "react-scroll";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <nav className="fixed w-screen h-[72px] flex items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="w-screen flex items-center justify-between">
        <h2 className="font-grape-nuts text-2xl w-40">Kuchta Oskar</h2>
        <MobileNavbar />
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
