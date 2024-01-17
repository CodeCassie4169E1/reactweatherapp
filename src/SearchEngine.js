import React, { useState } from "react";
import axios from "axios";
import IconDisplay from "./IconDisplay";
import FormattedDate from "./FormattedDate";

export default function SearchEngine(props) {
  let [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "9ee44dd39b241c853f96295c78bd71cb";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit} id="search-form">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city for the current weather.."
            onChange={updateCity}
            className="form-control"
            id="city-input"
          />
        </div>
        <div class="col-3">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </div>
      <h1 id="city">{city}</h1>
    </form>
  );
  let forecast = (
    <ul>
      <li>
        <FormattedDate date={weather.date} />
      </li>
      <li>{weather.description}</li>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex weather-temperature">
            <div className="temp">
              <strong id="temperature">
                {Math.round(weather.temperature)}
              </strong>
              <span className="units">°C </span>
              <IconDisplay icon={weather.icon} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-moisture"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z" />
              </svg>
              Humidity: <span id="humidity">{weather.humidity}</span>%
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-wind"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
              </svg>
              Wind: <span id="wind"> {Math.round(weather.wind)}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </ul>
  );
  if (loaded) {
    return (
      <div>
        {form}
        {forecast}
      </div>
    );
  } else {
    return form;
  }
}
