import React from "react";
import "./App.css";
import Participants from "./components/Participants";

function App() {
  return (
    <div className="App">
      <img
        className="hacktoberfest-logo mb-1"
        src="Hacktoberfest_19_Events_1457x180.png"
        alt="Hacktoberfest 2019"
      />
      <div className="container-fluid">
        <div className="row">
          <Participants />
        </div>
      </div>
    </div>
  );
}

export default App;
