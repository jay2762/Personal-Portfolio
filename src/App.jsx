import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import EducationSection from "./components/EducationSection";
import ContactForm from "./components/ContactForm";
import Resume from "./components/Resume";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SectionTransition from "./components/SectionTransition";
import CustomCursor from "./components/CustomCursor";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <SectionTransition>
              <Hero />
            </SectionTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <SectionTransition>
              <Projects />
            </SectionTransition>
          }
        />
        <Route
          path="/bio"
          element={
            <SectionTransition>
              <Bio />
            </SectionTransition>
          }
        />
        <Route
          path="/skills"
          element={
            <SectionTransition>
              <Skills />
            </SectionTransition>
          }
        />
        <Route
          path="/work"
          element={
            <SectionTransition>
              <WorkExperience />
            </SectionTransition>
          }
        />
        <Route
          path="/education"
          element={
            <SectionTransition>
              <EducationSection />
            </SectionTransition>
          }
        />
        <Route
          path="/resume"
          element={
            <SectionTransition>
              <Resume />
            </SectionTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <SectionTransition>
              <ContactForm />
            </SectionTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden">
        <CustomCursor />
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img -z-10"></div>
        <Navbar />
        <main className="relative z-0 w-full">
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
