import React from "react";
import IconDisplay from "./IconDisplay";
export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°
`;
  }
  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°
`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  return (
    <div className="WeatherForecast">
      <div className="WeatherForecast-day">{day()}</div>
      <IconDisplay icon={props.data.weather[0].icon} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temp-max">
          {maxTemp()} {"/"}
        </span>
        <span className="WeatherForecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
