import "../styles/Header.css";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const NavBar = () => {
  const mobileMenuRef = useRef(null);
  const [showMenu, setShowMenu] = useState(true);

  const toggleMobileMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle("hidden");
    }
  };

  return (
    <>
      <div className="flex row-span-1 hidden lg:flex flex-row  justify-between items-center mx-20 my-3 text-white">
        <div className="left"></div>
        <div className="right">
          <ul className="flex gap-20 flex-row text-lighter-gray">
            <li className="cursor-pointer flex flex-row items-center group">
              <a
                className="flex flex-row items-center gap-2 group-hover:text-white transition-all"
                href="#about-me"
              >
                <span className="w-[11px] h-[11px] bg-light-green rounded-full hover:bg-primary-green group-hover:bg-primary-green transition-all"></span>
                <span>About Me</span>
              </a>
            </li>
            <li className="cursor-pointer flex flex-row items-center gap-2 group">
              <a
                className="flex flex-row items-center gap-2 group-hover:text-white transition-all"
                href="#my-work"
              >
                <span className="w-[11px] h-[11px] bg-light-green rounded-full hover:bg-primary-green group-hover:bg-primary-green transition-all"></span>
                <span>My Projects</span>
              </a>
            </li>
            <li className="cursor-pointer flex flex-row items-center gap-2 group">
              <a
                className="flex flex-row items-center gap-2 group-hover:text-white transition-all"
                href=""
              >
                <span className="w-[11px] h-[11px] bg-light-green rounded-full hover:bg-primary-green group-hover:bg-primary-green transition-all"></span>
                <span>Blog</span>
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="#contact-me"
                className="border-2 border-light-green text-gray py-2 px-5 rounded-md hover:text-white hover:bg-primary-green transition-all"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
