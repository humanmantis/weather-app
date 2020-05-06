import React, { Component } from "react";
import "./WeatherCard.css";

class WeatherCard extends Component {
  render(date, condition, avgtemp_c) {
    return (
      <div className="weather-card">
        <p className="weather-card-text" id="date">
          2020-05-06
        </p>
        <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="Condition icon" className="weather-card-icon"/>
        <h3 className="weather-cart-temp">8.3°C</h3>
        <p className="weather-cart-text" id="condition">
          Cloudy
        </p>
      </div>
    );
  }
}

export default WeatherCard;
