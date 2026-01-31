import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Window from "../os/Window";
import useInitialWindowSize from "../../hooks/useInitialWindowSize";

import VerticalNavbar from "../showcase/VerticalNavbar";
import Home from "../showcase/Home";
import About from "../showcase/About";
import Experience from "../showcase/Experience";
import Projects from "../showcase/Projects";
import Contact from "../showcase/Contact";
import SovraTech from "../showcase/SovraTech";

import Hridmann from "../showcase/projects/Hridmann";
import Enso from "../showcase/projects/Enso";
import Truckin from "../showcase/projects/Truckintaste";

import Journey from "../showcase/Journey";
import JourneyPortfolio from "../showcase/journey/Portfolio";
import JourneyCbit from "../showcase/journey/Cbit";
import JourneyOutreach from "../showcase/journey/Outreach";
import JourneySkills from "../showcase/journey/Skills";
import JourneyCloseContacts from "../showcase/journey/CloseContacts";
import JourneyTransition from "../showcase/journey/Transition";

export interface ShowcaseExplorerProps extends WindowAppProps {}

const ShowcaseExplorer: React.FC<ShowcaseExplorerProps> = (props) => {
  const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

  return (
    <Window
      top={24}
      left={56}
      width={initWidth}
      height={initHeight}
      windowTitle="SovraTech Showcase"
      windowBarIcon="windowExplorerIcon"
      closeWindow={props.onClose}
      onInteract={props.onInteract}
      minimizeWindow={props.onMinimize}
      bottomLeftText={"© Copyright 2026 SovraTech "}
    >
      <Router>
        <div className="site-page">
          <VerticalNavbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* JOURNEY routes (each is a slide) */}
            <Route path="/journey" element={<Journey />} />
            <Route path="/journey/portfolio" element={<JourneyPortfolio />} />
            <Route path="/journey/cbit" element={<JourneyCbit />} />
            <Route path="/journey/outreach" element={<JourneyOutreach />} />
            <Route path="/journey/skills" element={<JourneySkills />} />
            <Route path="/journey/close-contacts" element={<JourneyCloseContacts />} />
            <Route path="/journey/transition" element={<JourneyTransition />} />

            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sovratech" element={<SovraTech />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/projects/Hridmann" element={<Hridmann />} />
            <Route path="/projects/Enso" element={<Enso />} />
            <Route path="/projects/Truckintaste" element={<Truckin />} />
          </Routes>
        </div>
      </Router>
    </Window>
  );
};

export default ShowcaseExplorer;
