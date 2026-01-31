import React from "react";
import { Icon } from "../general";

export default function Dock({ windows, toggleMinimize }: any) {
  const keys = Object.keys(windows);

  return (
    <div style={styles.outer}>
      <div style={styles.inner}>
        {keys.map((key) => (
          <div
            key={key}
            style={styles.item}
            onMouseDown={(e) => {
              e.preventDefault();
              toggleMinimize(key);
            }}
            title={windows[key].name}
          >
            <Icon icon={windows[key].icon} size={46} />
            {!windows[key].minimized && <div style={styles.dot} />}
          </div>
        ))}
      </div>

      {/* “glass shelf” shadow */}
      <div style={styles.shelfShadow} />
    </div>
  );
}

const styles: any = {
  outer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    display: "flex",
    justifyContent: "center",
    zIndex: 100000,
    pointerEvents: "none",
  },
  inner: {
    pointerEvents: "auto",
    display: "flex",
    gap: 14,
    padding: "10px 16px",
    borderRadius: 18,
    background: "rgba(230,230,230,0.70)",
    border: "1px solid rgba(0,0,0,0.25)",
    boxShadow: "0 18px 35px rgba(0,0,0,0.35)",
    backdropFilter: "blur(10px)",
  },
  item: {
    position: "relative",
    width: 58,
    height: 58,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "transform 0.12s ease",
  },
  dot: {
    position: "absolute",
    bottom: -6,
    width: 6,
    height: 6,
    borderRadius: 999,
    background: "rgba(0,0,0,0.65)",
  },
  shelfShadow: {
    position: "absolute",
    bottom: -10,
    width: 420,
    height: 18,
    borderRadius: 999,
    background: "rgba(0,0,0,0.22)",
    filter: "blur(10px)",
    pointerEvents: "none",
  },
};
