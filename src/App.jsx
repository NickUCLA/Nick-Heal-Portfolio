import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Helmet>
        <title>Nick Heal | Full Stack Developer</title>
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon.png"
          sizes="16x16"
        />
      </Helmet>
      <NavBar />
      <Hero />
      <About />
      <MyWork />
      <Contact />
      <div className="flex text-primary-green flex-col justify-center items-center mt-4">
        <span>Created by Nick Heal</span>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/NickUCLA/Nick-Heal-Portfolio"
        >
          <FontAwesomeIcon
            className="text-light-gray cursor-pointer hover:text-white transition-all mb-1"
            size="3x"
            icon={faGithub}
          />
        </a>
      </div>
    </>
  );
}

export default App;
