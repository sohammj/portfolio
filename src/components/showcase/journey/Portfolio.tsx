import React from "react";


export interface JourneyPortfolioProps {}

const JourneyPortfolio: React.FC<JourneyPortfolioProps> = () => {
  return (
    <div className="site-page-content">
      <h1 style={{ marginLeft: -16 }}>Portfolio</h1>
      <h3>The first proof of work</h3>
      <br />

      <div className="text-block">
        <p>
          The first serious step was building a portfolio — not to look cool,
          but to create proof. I saw seniors (especially from the VT )
          who stood out immediately because they had a real site showing what they
          built.
        </p>
        <br />
        <p>
          So I built mine. It started simple. The goal was clarity:
          <br />• Who am I?
          <br />• What do I build?
          <br />• Where’s the proof?
        </p>
        <br />
        <p>
          That one decision made outreach easier, resume stronger, and interviews
          more “real” because I could show execution.
        </p>
      </div>

      <div className="text-block">
            <p>
            Key takeaway:
            <br />
            <b>Claims don’t get you internships. Proof does.</b>
            </p>
        </div>

        <div className="captioned-image">
          <div style={styles.embedWrapper}>
            <iframe
              src="https://sohammj.github.io/"
              title="Soham Portfolio"
              style={styles.embed}
            />
          </div>

          <p>
            <sub>
              <b>Figure 1:</b> My first portfolio website — proof of work
            </sub>
          </p>
        </div>

      </div>
  );
};

const styles: StyleSheetCSS = {
  embedWrapper: {
    width: "100%",
    height: 520,
    border: "1px solid #000",
    overflow: "hidden",
    position: "relative",
  },

  // we will fit this "virtual desktop" into the wrapper
  embed: {
    position: "absolute",
    top: 0,
    left: 0,

    width: 1440,
    height: 900,
    border: "none",

    // ✅ KEY: scale so it fits the wrapper width perfectly
    // 100% / 1440 = 0.694444...
    transform: "scale(0.6944)",
    transformOrigin: "top left",

    display: "block",
  },
};

export default JourneyPortfolio;
