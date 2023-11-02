import { motion } from "framer-motion";
import logo from "/src/icons/N.png";

function Hero() {
  return (
    <>
      <div id="hero" className="min-h-screen grid grid-rows-6">
        <div className="row-span-1 hidden lg:block"></div>
        <div className="grid row-span-4 mt-50 grid-cols-12">
          <div className="col-span-1 hidden lg:block"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="col-span-12 lg:col-span-11 text-center lg:text-left"
          >
            <h4 className="text-lighter-gray mb-0 lg:mb-3 lg:text-lg">
              Hello, I&apos;m
            </h4>
            <h1 className="text-white flex flex-row justify-center lg:justify-start items-center">
              <span className="">
                <img
                  className="hidden lg:inline transform -translate-y-2.5"
                  src={logo}
                  alt="Description of Image"
                  width="112"
                  height="132"
                />
              </span>
              <span className="lg:hidden md:text-6xl text-2xl text-primary-green">
                Nick{" "}
              </span>
              <span className="lg:text-[86px] hidden lg:block text-6xl text-primary-green -ml-1">
                ick{" "}
              </span>
              <span className="mx-2"></span>
              <span className="lg:text-[86px] md:text-6xl text-2xl">Heal</span>
            </h1>
            <h2 className="lg:-mt-3 text-light-gray lg:text-4xl md:text-2xl text-xl">
              Full Stack Developer
            </h2>
            <p className="mt-3 text-lighter-gray lg:text-lg mr-6 ml-6 lg:ml-0">
              I am a full stack developer who excels in creating dynamic,
              <br />
              user-friendly websites and robust web applications.
            </p>
            <a href="#contact-me">
              <button className="border-2 mt-10 text-white border-light-green py-2 px-8 rounded-md hover:border-primary-green hover:text-white hover:bg-primary-green transition-all">
                Get in Touch
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
