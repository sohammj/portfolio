import React from "react";

const Truckin = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "flex-end" }}>
      <iframe
        src="https://truckin-taste-s3vg.vercel.app/"
        title="Truckin Taste"
        style={{
          width: "80%",
          height: "100%",
          border: "none",
          background: "white"
        }}
      />
    </div>
  );
};

export default Truckin;
