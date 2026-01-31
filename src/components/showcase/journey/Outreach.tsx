import React from "react";
import outreachProof from "../../../assets/pictures/outreach-proof.png"; 
// 👆 rename your image file to this OR change path accordingly

export interface JourneyOutreachProps {}

const JourneyOutreach: React.FC<JourneyOutreachProps> = () => {
  return (
    <div className="site-page-content">
      <h1 style={{ marginLeft: -16 }}>Outreach</h1>
      <h3>LinkedIn + targeting + cold messages + job portals (all in one system)</h3>
      <br />

      <div className="text-block">
        <p>
          Most people only apply on job websites. I did that too.
          But the real shift happened when I treated internship hunting like a system:
        </p>

        <br />

        <p>
          <b>Step 1 — Pick a direction</b>
          <br />Choose a role you’re aiming for.
        </p>

        <br />

        <p>
          <b>Step 2 — Target companies</b>
          <br />Not random 200. A focused list.
        </p>

        <br />

        <p>
          <b>Step 3 — LinkedIn visibility</b>
          <br />Build a profile that supports your proof (projects + skills + links).
        </p>

        <br />

        <p>
          <b>Step 4 — Cold messages (done properly)</b>
          <br />Short message, clear intent, proof link, one follow-up.
        </p>

        <br />

        <p>
          <b>Step 5 — Job portals (still useful)</b>
          <br />Use portals, but don’t rely only on them.
        </p>
      </div>

      <div className="text-block">
        <p>
          Key takeaway:
          <br />
          <b>Internship hunting is not one action. It’s repeated, deliberate execution.</b>
        </p>
      </div>

      {/* PROOF IMAGE */}
      <div className="captioned-image">
        <img
          src={outreachProof}
          style={{
            width: "100%",
            height: "auto",
            border: "1px solid #000",
          }}
          alt="Outreach Proof"
        />
        <p>
          <sub>
            <b>Figure:</b> Real outreach, referrals, interview confirmations, and responses
          </sub>
        </p>
      </div>
    </div>
  );
};

export default JourneyOutreach;
