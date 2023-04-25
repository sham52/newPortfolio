import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";
import Gate from "./components/gate/Gate";
import BackgroundMusic from "./components/music/BackgroundMusic";
import React, { useState } from "react";
function App() {
  const [isDarkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <div className="dark-mode">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode = {isDarkMode}setDarkMode={setDarkMode} />
      <BackgroundMusic />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
      <Gate />
    </div>
  );
}

export default App;
