import React, { useState, useEffect } from "react";
import Grouped from "../src/components/Grouped";

const App = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=1&category=15")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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
      <Grouped posts={posts} />
      <button className="ui primary button" posts={posts}>
        Submit
      </button>
    </div>
  );
};

export default App;
