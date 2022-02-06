import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The Weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }
  let apiKey = "ee5487a7be65de8d31de587d4d02ac57";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    (<h2>👋Hello from Weather👋</h2>),
    (<Audio heigth="100" width="100" color="#61dafb" ariaLabel="loading" />)
  );
}
