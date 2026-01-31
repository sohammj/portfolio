import React from "react";

const SovraTech = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "flex-end" }}>
      <iframe
        src="https://sovratech.com"
        title="SovraTech"
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

export default SovraTech;
