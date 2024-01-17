import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

export default function SearchEngine(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "9ee44dd39b241c853f96295c78bd71cb";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showTemperature);
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
      <CurrentWeather data={weather} />
    </form>
  );

  if (weather.ready) {
    return <div>{form}</div>;
  } else {
    search();
    return "Searching...";
  }
}
