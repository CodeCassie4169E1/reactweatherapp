import React, { useState } from "react";

export default function TempConversion(props) {
  const [unit, setunit] = useState("celcius");
  function convertTemp(event) {
    event.preventDefault();
    setunit("fahrenheit");
  }
  function showF(event) {
    event.preventDefault();
    setunit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div>
        <strong id="temperature">{Math.round(props.celcius)}</strong>
        <span className="units">
          {" "}
          °C |{" "}
          <a href="/" onClick={convertTemp}>
            {" "}
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div>
        <strong id="temperature">{Math.round(fahrenheit)}</strong>
        <span className="units">
          <a href="/" onClick={showF}>
            {" "}
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
