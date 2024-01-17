import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine.js";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <SearchEngine defaultCity="New York" />
          <footer>
            <small className="source">
              <a
                href="https://github.com/CodeCassie4169E1/reactweatherapp"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>{" "}
              by{" "}
              <a
                href="https://www.shecodes.io/graduates/86602-cassie-sichmeller"
                target="_blank"
                rel="noreferrer"
              >
                Cassie Sichmeller
              </a>
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
