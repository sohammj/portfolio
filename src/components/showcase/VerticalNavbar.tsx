import React, { useEffect, useState } from "react";
import { Link as ShowcaseLink } from "../general";
import { useLocation } from "react-router-dom";

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = () => {
  const location = useLocation();

  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [journeyExpanded, setJourneyExpanded] = useState(false);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setProjectsExpanded(location.pathname.includes("/projects"));
    setJourneyExpanded(location.pathname.includes("/journey"));
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  if (isHome) return <></>;

  return (
    <div style={styles.navbar}>
      <div style={styles.header}>
        <h1 style={styles.headerText}>Soham</h1>
        <h1 style={styles.headerText}>Joshi</h1>
        <h3 style={styles.headerShowcase}>SovraTech</h3>
      </div>

      <div style={styles.links}>
        <ShowcaseLink containerStyle={styles.link} to="" text="HOME" />
        <ShowcaseLink containerStyle={styles.link} to="about" text="ABOUT" />

        {/* JOURNEY — match CLIENTS behavior */}
        <ShowcaseLink
          containerStyle={{
            ...styles.link,
            ...(journeyExpanded ? styles.expandedLink : {}),
          }}
          to="journey"
          text="JOURNEY"
        />

        {journeyExpanded && (
          <div style={styles.insetLinks}>
            <ShowcaseLink containerStyle={styles.insetLink} to="journey/portfolio" text="Portfolio" />
            <ShowcaseLink containerStyle={styles.insetLink} to="journey/cbit" text="CBIT → Clarity" />
            <ShowcaseLink containerStyle={styles.insetLink} to="journey/outreach" text="Outreach" />
            <ShowcaseLink containerStyle={styles.insetLink} to="journey/skills" text="Skills (Proof Framework)" />
            <ShowcaseLink containerStyle={styles.insetLink} to="journey/close-contacts" text="Close Contacts" />
            <ShowcaseLink containerStyle={styles.insetLink} to="journey/transition" text="Internship → SovraTech" />
          </div>
        )}

        <ShowcaseLink containerStyle={styles.link} to="experience" text="EXPERIENCE" />
        <ShowcaseLink containerStyle={styles.link} to="sovratech" text="SOVRATECH" />

        {/* CLIENTS */}
        <ShowcaseLink
          containerStyle={{
            ...styles.link,
            ...(projectsExpanded ? styles.expandedLink : {}),
          }}
          to="projects"
          text="CLIENTS"
        />

        {projectsExpanded && (
          <div style={styles.insetLinks}>
            <ShowcaseLink containerStyle={styles.insetLink} to="projects/Hridmann" text="Hridmann" />
            <ShowcaseLink containerStyle={styles.insetLink} to="projects/Enso" text="EnsoMindmatters" />
            <ShowcaseLink containerStyle={styles.insetLink} to="projects/Truckintaste" text="Truckin' Taste" />
          </div>
        )}

        <ShowcaseLink containerStyle={styles.link} to="contact" text="CONTACT" />

        {/* optional spacer so last link doesn’t hug bottom */}
        <div style={{ height: 24 }} />
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  navbar: {
    width: 300,
    height: "100%",
    padding: 48,
    boxSizing: "border-box",
    position: "fixed",
    flexDirection: "column",

    // ✅ Scrollable sidebar
    overflowY: "auto",
  },

  header: {
    flexDirection: "column",
    marginBottom: 64,
  },
  headerText: {
    fontSize: 38,
    lineHeight: 1,
  },
  headerShowcase: {
    marginTop: 12,
  },

  links: {
    flexDirection: "column",

    // ✅ Don’t vertically center links (fixes weird look)
    justifyContent: "flex-start",
  },

  link: {
    marginBottom: 32,
  },

  expandedLink: {
    marginBottom: 16,
  },

  insetLinks: {
    flexDirection: "column",
    marginLeft: 32,
    marginBottom: 16,
  },

  insetLink: {
    marginBottom: 8,
  },
};

export default VerticalNavbar;
