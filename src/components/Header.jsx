import React from "react";

import myphoto from "../assets/myphoto.JPG"

function Header() {
  return (
    <div
      style={{
        width: "100%", 
        height: "65px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid white",

        padding: "0 40px",
      }}
    >
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: "700", // Bold
          fontSize: "18px",
          lineHeight: "23px",
          letterSpacing: "0px",
          color: "#FFFFFF",
          textAlign: "left",
        }}
      >
        ConnectCard
      </div>
      <img src = {myphoto} alt = "myphoto" style = {{width:"20px",height:"20px",borderRadius:"20px"}}/>
    </div>
  );
}

export default Header;
