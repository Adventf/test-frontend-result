import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Participant from "./pages/Participant";
import Search from "./pages/Search";
import "./styles/style.css";

function App() {
  return (
    <div className="wrapper">
      <span className="left">
        <Participant />
      </span>
      <span className="right">
        <Search />
      </span>
    </div>
  );
}

export default App;
