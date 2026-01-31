import React from "react";

const enso = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "flex-end" }}>
      <iframe
        src="https://enso-five.vercel.app/"
        title="Enso Mindmatters"
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

export default enso;
