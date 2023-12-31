import { useRef } from "react";
import { motion } from "framer-motion";
import logo from "/src/icons/N2.png";
import aboutData from "../data/aboutData";

function NavBar() {
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle("hidden");
    }
  };

  return (
    <>
      <div className="flex row-span-1 hidden lg:flex flex-row justify-between items-center ml-12 mx-20 my-3 text-white">
        <div className="left">
          <img src={logo} alt="Logo" className="w-24 h-24" />
        </div>
        <div className="right">
          <ul className="flex gap-20 flex-row text-light-gray">
            <li className="cursor-pointer flex flex-row items-center group">
              <a
                className="flex flex-row items-center gap-2 group-hover:text-white transition-all text-lg"
                href="#about-me"
              >
                <span className="w-[11px] h-[11px] bg-light-green rounded-full hover:bg-primary-green group-hover:bg-primary-green transition-all"></span>
                <span>About Me</span>
              </a>
            </li>
            <li className="cursor-pointer flex flex-row items-center gap-2 group">
              <a
                className="flex flex-row items-center gap-2 group-hover:text-white transition-all text-lg"
                href="#my-work"
              >
                <span className="w-[11px] h-[11px] bg-light-green rounded-full hover:bg-primary-green group-hover:bg-primary-green transition-all"></span>
                <span>My Projects</span>
              </a>
            </li>
            <li className="cursor-pointer flex flex-row items-center gap-2 group">
              <a
                className="flex flex-row items-center gap-2 group-hover:text-white transition-all text-lg"
                href={aboutData.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-[11px] h-[11px] bg-light-green rounded-full hover:bg-primary-green group-hover:bg-primary-green transition-all"></span>
                <span>Resume</span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="#contact-me"
                className="border-2 border-light-green text-gray py-2 px-5 rounded-md hover:text-white hover:bg-primary-green transition-all text-lg"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="lg:hidden flex justify-between mx-10 mt-5 flex-row items-center">
        <div className="left">
          <img alt="Logo" src={logo} className="w-20 h-20" />
        </div>
        <button
          onClick={toggleMobileMenu}
          className="outline-none mobile-menu-button"
        >
          <svg
            className="w-8 h-8 text-gray-500 hover:text-blue-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        ref={mobileMenuRef}
        className="hidden lg:hidden mobile-menu"
      >
        <ul className="flex flex-col text-lighter-gray">
          <li className="cursor-pointer flex flex-row bg-primary-green text-white py-3 items-center group hover:opacity-70">
            <a
              className="flex flex-row mx-10 items-center gap-2 group-hover:text-white transition-all"
              href="#about-me"
            >
              <span>About Me</span>
            </a>
          </li>
          <li className="cursor-pointer flex flex-row py-3 items-center bg-primary-green text-white gap-2 group hover:opacity-70">
            <a
              className="flex flex-row mx-10 items-center gap-2 group-hover:text-white transition-all"
              href="#my-work"
            >
              <span>My Projects</span>
            </a>
          </li>
          <li className="cursor-pointer flex flex-row py-3 bg-primary-green text-white items-center gap-2 group hover:opacity-70">
            <a
              className="flex flex-row items-center gap-2 group-hover:text-white mx-10 transition-all"
              href={aboutData.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume</span>
            </a>
          </li>
          <li className="cursor-pointer flex flex-row py-3 bg-primary-green text-white items-center gap-2 group hover:opacity-70">
            <a
              className="flex flex-row items-center gap-2 group-hover:text-white mx-10 transition-all"
              href="#contact-me"
            >
              <span>Contact Me</span>
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
}

export default NavBar;
