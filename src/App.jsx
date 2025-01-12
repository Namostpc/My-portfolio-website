import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Homepage from "./components/homepage/homepage";
import Navbar from "./components/nav/nav";
import About from './components/about/about'
import Experiences from "./components/experiences/experiences";
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <About />
      <Experiences/>
      <Projects/>
      <Skills/>
    </>
  );
}

export default App;
