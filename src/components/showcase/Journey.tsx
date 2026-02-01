import React from "react";
// import { Link } from "react-router-dom";

export interface JourneyProps {}

const Journey: React.FC<JourneyProps> = () => {
  return (
    <div className="site-page-content">
      <h1 style={{ marginLeft: -16 }}>Journey</h1>
      <h3>What I did to land an internship — and how you can replicate it</h3>
      <br />

      <div className="text-block">
        <p>
          Hi — I’m Soham. Last year I was sitting exactly where you are, attending CBIT
          sessions and trying to figure out internships, skills, and direction.
        </p>

        <br />

        <p>
          Today I’m here for two reason:
          <br />• To show you the <b>exact system</b> I followed (so you can copy it)
          <br />• To meet you — because I’ll be <b>joining you next year</b>
        </p>

        <br />

        <p>
          This a playbook:
          <br />
          <b>Portfolio → Clarity → Outreach → Skills Proof → Internship → SovraTech</b>
        </p>

        <br />

       
      </div>
    </div>
  );
};

export default Journey;
