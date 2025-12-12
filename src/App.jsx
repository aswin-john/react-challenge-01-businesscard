import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import ProfileContent from "./components/ProfileContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundColor: "#121417",
           width: "100%",  
          height: "100vh",
          display: "flex",
          // justifyContent:'center',
          // alignItems:'center'
          flexDirection:'column'
        }}
      >

        <Header/>
        <ProfileContent />
      </div>
    </>
  );
}

export default App;
