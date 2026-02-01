import React from "react";
import meNow from "../../assets/pictures/currentme.jpg";
import { Link } from "react-router-dom";
import ResumeDownload from "./ResumeDownload";

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="site-page-content">

      {/* Title */}
      <h1 style={{ marginLeft: -16 }}>About</h1>
      <h3>Soham Joshi</h3>
      <br />

      {/* Main Row */}
      <div style={styles.row}>

        {/* LEFT COLUMN */}
        <div style={styles.left}>

          {/* Short About */}
          <p>
            I’m a B.Tech Computer Science (Data Science) student building
            real-world products, systems, and client projects — focused on
            turning skills into visible proof.
          </p>

          <br />

          {/* Experience */}
          <h3>Experience</h3>
          <p>
            <h3>Data Analyst Intern — BingoForge</h3>
            Worked on dashboards, ERP customization, and data-driven workflows.
          </p>

          <br />

          {/* Founder */}
          <h3>Founder — SovraTech</h3>
          <p>
            Building a small product & web studio creating interactive websites,
            dashboards, and automation tools for clients.
          </p>

          <br />

          <p>
            Explore how I reached here →{" "}
            <Link to="/journey">Journey</Link>
          </p>

          <br />

          <ResumeDownload />

        </div>

        {/* RIGHT COLUMN (PHOTO) */}
        <div style={styles.right}>
          <img src={meNow} style={styles.image} alt="Me now" />
          <p>
            <sub>
              <b>Figure:</b> Me, now
            </sub>
          </p>
        </div>

      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {

  row: {
    display: "flex",
    gap: 48,
    alignItems: "flex-start",
  },

  left: {
    flex: 1,
    flexDirection: "column",
  },

  right: {
    width: 320,
    textAlign: "center",
    flexDirection: "column",
  },

  image: {
    width: "100%",
    height: "80%",
    border: "1px solid #000",
  },

};

export default About;
