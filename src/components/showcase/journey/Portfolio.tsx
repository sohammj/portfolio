import React, { useEffect, useRef, useState } from "react";
export interface JourneyPortfolioProps {}

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 900;

const JourneyPortfolio: React.FC<JourneyPortfolioProps> = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!wrapperRef.current) return;

      const wrapperWidth = wrapperRef.current.clientWidth;
      const newScale = wrapperWidth / BASE_WIDTH;
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

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
        <div ref={wrapperRef} style={styles.embedWrapper}>
          <iframe
            src="https://sohammj.github.io/"
            title="Soham Portfolio"
            style={{
              ...styles.embed,
              transform: `scale(${scale})`,
            }}
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

const styles: any = {
  embedWrapper: {
    width: "100%",
    maxWidth: 1000,
    margin: "0 auto",
    aspectRatio: "16 / 9",
    border: "1px solid #000",
    overflow: "hidden",
    position: "relative",
    background: "#000",
  },

  embed: {
    position: "absolute",
    top: 0,
    left: 0,
    width: BASE_WIDTH,
    height: BASE_HEIGHT,
    border: "none",
    transformOrigin: "top left",
  },
};

export default JourneyPortfolio;
