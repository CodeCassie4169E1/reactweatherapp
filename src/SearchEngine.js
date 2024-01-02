import React, { useState } from "react";
import axios from "axios";
import IconDisplay from "./IconDisplay";

export default function SearchEngine() {
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
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "9ee44dd39b241c853f96295c78bd71cb";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(showTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit} id="search-form">
      <div className="row">
        <div class="col-9">
          <input
            type="search"
            placeholder="Type a city for the current weather.."
            onChange={updateCity}
            class="form-control"
            id="city-input"
          />
        </div>
        <div class="col-3">
          <input type="submit" value="Search" class="btn btn-primary" />
        </div>
      </div>
    </form>
  );
  let forecast = (
    <ul>
      <li>
        {city} it is {weather.description}
      </li>
      <li>Temperature is {Math.round(weather.temperature)}°C</li>
      <li>Humidity is {weather.humidity}%</li>
      <li>Wind is {Math.round(weather.wind)}km/h</li>
      <li>
        <IconDisplay icon={weather.icon} />
      </li>
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
