import React from "react";
import { Link } from "react-router-dom";

export interface JourneyTransitionProps {}

const JourneyTransition: React.FC<JourneyTransitionProps> = () => {
  return (
    <div className="site-page-content">
      <h1 style={{ marginLeft: -16 }}>Internship → SovraTech</h1>
      <h3>How it connects</h3>
      <br />

      <div className="text-block">
        <p>
          The internship didn’t just add a line to my resume.
          It gave me real exposure to how work happens:
          requirements, timelines, feedback loops, shipping, iteration.
        </p>
        <br />
        <p>
          That confidence + execution mindset is what helped me build SovraTech more seriously.
          It wasn’t “startup motivation” — it was repeatable execution:
          <br />• build
          <br />• ship
          <br />• improve
          <br />• repeat
        </p>
        <br />
        <p>
          If you want to explore that part:
          <br />
          <Link to="/sovratech">SovraTech</Link> and <Link to="/projects">Clients</Link>
        </p>
      </div>
    </div>
  );
};

export default JourneyTransition;
