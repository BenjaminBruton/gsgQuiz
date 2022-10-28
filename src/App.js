import React from "react";
// import data from "./data/data.js";
import Grouped from "../src/components/Grouped";

const App = () => {
  return (
    <div
      className="ui form"
      style={{
        position: "absolute",
        top: "50%",
        left: "40%",
        transform: "translate(0, -50%)",
        margin: "auto",
        width: "20%",
        border: "5px solid #1e4c80",
        padding: "10px",
      }}
    >
      <Grouped />
    </div>
  );
};

export default App;
