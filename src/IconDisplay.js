import React from "react";
import axios from "axios";

export default function IconDisplay(props) {
  let url = `https://openweathermap.org/img/wn/${props.icon}@2x.png`;
  axios.get(url);

  return <img src={url} alt="Weather Icon" />;
}
