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
          °F |{" "}
          <a href="/" onClick={convertTemp}>
            {" "}
            °C{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = ((props.celcius - 32) * 5) / 9;
    return (
      <div>
        <strong id="temperature">{Math.round(fahrenheit)}</strong>
        <span className="units">
          <a href="/" onClick={showF}>
            {" "}
            °F{" "}
          </a>
          | °C
        </span>
      </div>
    );
  }
}
