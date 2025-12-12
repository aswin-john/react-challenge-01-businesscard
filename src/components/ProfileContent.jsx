import React from "react";

import myphoto from "../assets/myphoto.JPG"

function ProfileContent() {
  return (
    <div
      style={{
        width: "100%", 
        // height: "65px",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",


        marginTop:"36px",

        padding: "0 40px",
        flexDirection:"column"
      }}
    >
        <img src = {myphoto} alt = "myphoto" style = {{width:"128px",height:"128px",borderRadius:"64px"}}/>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: "700", // Bold
          fontSize: "22px",
          lineHeight: "28px",
          letterSpacing: "0px",
          color: "#FFFFFF",
 
        }}
      >
        Aswin John
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: "400", // Bold
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0px",
          color: "#9EABBA",
       
        }}
      >
        Freelance Software Engineer
      </div>
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: "700", // Bold
          fontSize: "18px",
          lineHeight: "24px",
          letterSpacing: "0px",
          color: "#9EABBA",
        }}
      >
        Kochi,Kerala
      </div>
    </div>
  );
}

export default ProfileContent;
