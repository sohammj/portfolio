import React from "react";
import Window from "../os/Window";

export interface CreditsProps extends WindowAppProps {}

const RESUME_PDF_PATH = "/Soham_Joshi_Resume.pdf";

const Credits: React.FC<CreditsProps> = (props) => {
  return (
    <Window
      top={48}
      left={48}
      width={1100}
      height={800}
      windowTitle="Resume"
      windowBarIcon="windowExplorerIcon"
      closeWindow={props.onClose}
      onInteract={props.onInteract}
      minimizeWindow={props.onMinimize}
      bottomLeftText={"© 2026 Soham Joshi"}
    >
      {/* <div className="site-page" style={styles.wrap}>
        <div style={styles.topBar}>
          <a href={RESUME_PDF_PATH} download style={styles.button}>
            Download
          </a>
        </div> */}

        <div style={styles.viewer}>
          <iframe
            src={RESUME_PDF_PATH}
            title="Resume PDF"
            style={styles.iframe}
          />
        </div>
      {/* </div> */}
    </Window>
  );
};

const styles: StyleSheetCSS = {
  wrap: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },

  // small strip for the button
  topBar: {
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 12px",
    boxSizing: "border-box",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
  },

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 12px",
    border: "1px solid rgba(255,255,255,0.25)",
    backgroundColor: "rgba(255,255,255,0.08)",
    color: "white",
    textDecoration: "none",
    borderRadius: 6,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
  },

  // pdf takes rest of the window
  viewer: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    overflow: "hidden",
  },

  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
    background: "white",
  },
};

export default Credits;
