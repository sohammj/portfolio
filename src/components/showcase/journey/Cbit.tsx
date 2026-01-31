import React from "react";

export interface JourneyCbitProps {}

const JourneyCbit: React.FC<JourneyCbitProps> = () => {
  return (
    <div className="site-page-content">
      <h1 style={{ marginLeft: -16 }}>CBIT → Clarity</h1>
      <h3>Matching your skills to the right career path</h3>
      <br />

      <div className="text-block">
        <p>
          Last year, I was sitting in these CBIT sessions with one big confusion:
          <b> “What role am I actually aiming for?”</b>
        </p>
        <br />
        <p>
          CBIT mattered because it gave me a simple framework:
          <br />• identify strengths (what you’re already good at)
          <br />• map them to real roles (what companies actually hire for)
          <br />• list gaps (what’s missing)
          <br />• build a weekly plan (so progress becomes predictable)
        </p>
      </div>

      <div className="text-block">
        <h3>My strengths (what I already had)</h3>
        <br />
        <p>
          • Strong Python + C/C++ fundamentals
          <br />• Data visualization (Tableau / Power BI)
          <br />• ML + statistics experience from predictive projects
          <br />• Problem-solving + critical thinking
          <br />• Communication + leadership (organizing + presenting)
        </p>
      </div>

      <div className="text-block">
        <h3>Career paths that actually match these strengths</h3>
        <br />
        <p>
          CBIT made me stop guessing and start matching:
          <br />
          <br />
          <b>1) Data Scientist / Data Analyst</b>
          <br />
          Predictive modeling + analysis + communicating insights
          <br />
          <br />
          <b>2) Business Intelligence Analyst</b>
          <br />
          Tableau/Power BI + business decision support
          <br />
          <br />
          <b>3) Machine Learning Engineer</b>
          <br />
          Building models + shipping them
          <br />
          <br />
          <b>4) Data Engineer (later expansion)</b>
          <br />
          Strong programming → pipelines + infra + databases
        </p>
      </div>

      <div className="text-block">
        <h3>Gaps CBIT helped me spot early</h3>
        <br />
        <p>
          This part is important — not to feel “behind”, but to become precise:
          <br />• deeper R + advanced statistics
          <br />• stronger SQL + database management
          <br />• cloud + big data basics
          <br />• deployment / productionizing ML (end-to-end projects: data → model → ship)
        </p>
      </div>

      <div className="text-block">
        <h3>What I did next (weekly execution)</h3>
        <br />
        <p>
          Once the role + gaps were clear, I used a weekly system:
          <br />
          <br />
          • <b>Week 1:</b> Portfolio website + initial networking
          <br />
          • <b>Week 2:</b> Research job profiles + resume (industry template)
          <br />
          • <b>Week 3:</b> Build a real project (iOS data viz app + R integration)
          <br />
          • <b>Week 4:</b> LeetCode routine + visualization certification
        </p>
      </div>

      <div className="text-block">
        <p>
          Key takeaway:
          <br />
          <b>Clarity makes effort predictable.</b>
          <br />
          When you know the role, you stop doing random work — and every week
          becomes proof-building.
        </p>
      </div>
    </div>
  );
};

export default JourneyCbit;
