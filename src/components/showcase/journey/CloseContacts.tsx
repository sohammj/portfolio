import React from "react";

export interface JourneyCloseContactsProps {}

const JourneyCloseContacts: React.FC<JourneyCloseContactsProps> = () => {
  return (
    <div className="site-page-content">
      <h1 style={{ marginLeft: -16 }}>Close Contacts</h1>
      <h3>The shortcut most people ignore</h3>
      <br />

      <div className="text-block">
        <p>
          One message to a senior can beat 100 cold applications — if you ask properly.
        </p>
        <br />
        <p>
          Better approach:
          <br />• “Can you refer me?” ❌
          <br />• “Can you review my portfolio/resume and tell me what to fix?” ✅
        </p>
        <br />
        <p>
          If your work is strong, the referral becomes natural.
        </p>
      </div>

      <div className="text-block">
        <p>
          Key takeaway:
          <br />
          <b>Ask for feedback first. It opens doors.</b>
        </p>
      </div>
    </div>
  );
};

export default JourneyCloseContacts;
