import React from "react";
import ResumeDownload from "./ResumeDownload";

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
  return (
    <div className="site-page-content">
      <ResumeDownload />

      {/* =========================
          SovraTech
      ========================== */}
      <div style={styles.headerContainer}>
        <div style={styles.header}>
          <div style={styles.headerRow}>
            <h1>SovraTech</h1>
            {/* Replace href with your actual domain when ready */}
            <a rel="noreferrer" target="_blank" href={"https://sovratech.com/"}>
              <h4>www.sovratech.com</h4>
            </a>
          </div>
          <div style={styles.headerRow}>
            <h3>Founder</h3>
            <b>
              <p>Nov 3, 2025 - Present</p>
            </b>
          </div>
        </div>
      </div>

      <div className="text-block">
        <p>
          SovraTech is my independent studio where I design and build modern web
          experiences and data-driven solutions — from polished, interactive
          frontends to dashboards, automation workflows, and AI-enhanced web
          features for real clients.
        </p>
        <br />
        <ul>
          <li>
            <p>
              Built and shipped full-stack websites with a strong focus on
              performance, clean UI, and maintainable architecture.
            </p>
          </li>
          <li>
            <p>
              Delivered data dashboards and reporting workflows to help teams
              track KPIs and make decisions faster.
            </p>
          </li>
          <li>
            <p>
              Worked end-to-end: requirements → design → development → deployment
              → iteration, ensuring projects stayed reliable and scalable.
            </p>
          </li>
          <li>
            <p>
              Integrated modern tooling and automation where it improved user
              experience and operational efficiency.
            </p>
          </li>
        </ul>
      </div>

      {/* =========================
          Bingoforge
      ========================== */}
      <div style={styles.headerContainer}>
        <div style={styles.header}>
          <div style={styles.headerRow}>
            <h1>Bingoforge Pvt. Ltd.</h1>
            {/* Optional: replace with company site if you want */}
            {/* <a rel="noreferrer" target="_blank" href={"https://bingoforge.com/"}> */}
            {/*   <h4>www.bingoforge.com</h4> */}
            {/* </a> */}
          </div>
          <div style={styles.headerRow}>
            <h3>Data Analyst Intern</h3>
            <b>
              <p>May 2025 - Aug 2025 · 4 mos</p>
            </b>
          </div>
          <div style={styles.headerRow}>
            <p style={{ marginTop: 6 }}>
              Mumbai, Maharashtra, India · On-site
            </p>
          </div>
        </div>
      </div>

      <div className="text-block">
        <p>
          Worked as a Data Analyst Intern in the Product department, contributing
          to CRM data exploration, KPI dashboard enhancement, and product
          decision insights.
        </p>
        <br />
        <ul>
          <li>
            <p>
              Explored CRM data to identify trends, gaps, and actionable insights
              supporting product decisions.
            </p>
          </li>
          <li>
            <p>
              Enhanced KPI dashboards by improving metrics clarity, structure,
              and usability for faster stakeholder understanding.
            </p>
          </li>
          <li>
            <p>
              Used SQL and analysis workflows to support reporting, ad-hoc
              questions, and ongoing performance tracking.
            </p>
          </li>
          <li>
            <p>
              Collaborated with the product team to translate questions into
              measurable KPIs and practical analytics outputs.
            </p>
          </li>
        </ul>

        <br />
        <p>
          <b>Skills:</b> SQL, Data Analysis, Dashboarding, KPI Tracking, CRM
          Analytics
        </p>
      </div>
    </div>
  );
};

const styles: StyleSheetCSS = {
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  skillRow: {
    flex: 1,
    justifyContent: "space-between",
  },
  skillName: {
    minWidth: 56,
  },
  skill: {
    flex: 1,
    padding: 8,
    alignItems: "center",
  },
  progressBar: {
    flex: 1,
    background: "red",
    marginLeft: 8,
    height: 8,
  },
  hoverLogo: {
    height: 32,
    marginBottom: 16,
  },
  headerContainer: {
    alignItems: "flex-end",
    width: "100%",
    justifyContent: "center",
  },
  hoverText: {
    marginBottom: 8,
  },
  indent: {
    marginLeft: 24,
  },
  headerRow: {
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default Experience;
