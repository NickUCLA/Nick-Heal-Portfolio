import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MyWork from "./components/MyWork";
import ProjectShowcase from "./components/ProjectShowcase";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

function MainContent() {
  let location = useLocation();
  let background = location.state && location.state.background;

  // State to manage the modal open state
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Open the modal if the background location is set (i.e., we are "behind" a modal route)
    setModalOpen(!!background);
  }, [background]);

  return (
    <>
      <NavBar />

      {/* The main page content */}
      <Routes location={background || location}>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <MyWork />
            </>
          }
        />

        {/* Other routes here */}
      </Routes>

      {/* Only render the modal when the background location is set (i.e., when visiting a modal route) */}
      {background && (
        <Routes>
          <Route
            path="/projects/:projectId"
            element={
              <ProjectShowcase
                isOpenFromProps={isModalOpen}
                setIsOpenFromProps={setModalOpen}
              />
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
