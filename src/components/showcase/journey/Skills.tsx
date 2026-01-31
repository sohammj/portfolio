import React from "react";
import { Link } from "react-router-dom";

export interface JourneySkillsProps {}

const JourneySkills: React.FC<JourneySkillsProps> = () => {
  return (
    <div className="site-page-content">
      <h1 style={{ marginLeft: -16 }}>Skills</h1>
      <h3>Skills are not claims — they’re proof</h3>
      <br />

      <div className="text-block">
        <p>
          Here’s the biggest mindset shift that helped me:
          <br />
          <b>Skills are not what you say you know.</b>
          <br />
          Skills are what you can <b>demonstrate</b> under pressure, in interviews,
          and in real work.
        </p>

        <br />

        <p>
          That’s why I think of skill-building as a simple system:
          <br />• <b>Learn</b> the concept
          <br />• <b>Practice</b> it until it becomes reliable
          <br />• <b>Prove</b> it through output (projects / work)
        </p>

        <br />

        <p>
          For most internships, the proof comes from three pillars:
          <br />
          <b>LeetCode</b> (problem-solving),
          <b> Certifications</b> (structured validation),
          <b> Projects</b> (execution + proof).
        </p>
      </div>

      {/* Pillar 1 */}
      <div className="text-block">
        <h3>1) LeetCode → Problem-Solving Proof</h3>
        <br />

        <p>
          LeetCode isn’t about flexing difficulty. It trains:
          <br />• breaking problems down
          <br />• pattern recognition (arrays, hashing, two pointers, recursion…)
          <br />• writing clean logic under time pressure
        </p>

        <br />

        <p>
          In internships, you constantly face unfamiliar tasks. LeetCode helps you
          stay calm and structured when you don’t know the answer instantly.
        </p>

        <br />

        <p>
          My rule:
          <br />
          <b>Consistency beats intensity.</b> A small daily habit beats random grind.
        </p>
      </div>

      {/* Pillar 2 */}
      <div className="text-block">
        <h3>2) Certifications → Structured Proof</h3>
        <br />

        <p>
          Certifications don’t replace projects — but they:
          <br />• give structured learning paths
          <br />• expose you to industry tools
          <br />• validate baseline knowledge
        </p>

        <br />

        <p>
          I mainly use certifications to:
          <br />• fill knowledge gaps
          <br />• learn tools faster
          <br />• support my self-learning with credibility
        </p>

        <br />

        <p>
          My rule:
          <br />
          <b>Use certifications as accelerators, not shortcuts.</b>
        </p>
      </div>

      {/* Pillar 3 */}
      <div className="text-block">
        <h3>3) Projects → Execution Proof</h3>
        <br />

        <p>
          Projects are the strongest proof because they answer:
          <br />• Can you actually build and finish something?
          <br />• Can you debug when it breaks?
          <br />• Can you document and explain your work?
          <br />• Can you ship?
        </p>

        <br />

        <p>
          Here’s what makes a project “internship-grade”:
          <br />• clear problem statement
          <br />• clean UI / output
          <br />• proper README
          <br />• real dataset / realistic use-case
          <br />• screenshots / demo
        </p>

        <br />

        <p>
          My rule:
          <br />
          <b>Build fewer. Ship better. Document properly.</b>
        </p>
      </div>

      {/* Foundations */}
      <div className="text-block">
        <h3>Core Foundations (Non-Negotiable)</h3>
        <br />

        <p>
          These are not “flashy skills”, but they quietly power everything:
          <br />
          <b>DBMS</b> → thinking in tables, relations, queries, constraints.
          <br />
          <b>Git</b> → version control, collaboration, rollback, clean history.
        </p>

        <br />

        <p>
          You don’t need mastery on day one.
          You do need to become <b>comfortable using them properly</b>.
        </p>

        <br />

        <p>
          My rule:
          <br />
          <b>Strong foundations compound faster than trendy tools.</b>
        </p>
      </div>

      {/* Putting it together */}
      <div className="text-block">
        <h3>How these connect (the framework)</h3>
        <br />

        <p>
          This is how it ties together:
          <br />
          <b>LeetCode</b> builds the ability to solve unknown problems.
          <br />
          <b>Certifications</b> build structured understanding.
          <br />
          <b>Projects</b> combine both and create <b>proof</b>.
        </p>

        <br />

        <p>
          That’s what makes you stand out. Not “I know Python.”  
          But “Here’s what I built, here’s how it works, and here’s how I think.”
        </p>
      </div>

      {/* Optional bridge */}
      <div className="text-block">
        <p>
          If you want to see this “proof” style in action, check:
          <br />
          <Link to="/projects">Clients</Link> for shipped work and
          <br />
          <Link to="/sovratech">SovraTech</Link> for how I applied these skills commercially.
        </p>
      </div>
    </div>
  );
};

export default JourneySkills;
