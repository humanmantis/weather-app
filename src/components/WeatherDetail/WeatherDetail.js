import React, { Component } from "react";
import { connect } from "react-redux";
import "./WeatherDetail.css";

class WeatherDetail extends Component {
  render() {
    return (
      <div className="weather-detail">
        <h3>Weather in London</h3>
        {console.log("this.props :>> ", this.props)}
        <div className="weather-detail-container">
          <div className="weather-detail-container-sm">
            <p className="weather-detail-text" id="date">
              2020-05-06
            </p>
            <img
              src="//cdn.weatherapi.com/weather/64x64/day/113.png"
              alt="condition"
              className="weather-detail-icon"
            />
            <h3 className="weather-detail-temp" id="temp">
              8.3°C
            </h3>
            <p className="weather-detail-text" id="condition">
              Cloudy
            </p>
          </div>
          <div className="weather-detail-container-lg">
            <h3 className="weather-detail-title">Day detail</h3>
            <div className="weather-detail-group">
              <div className="weather-detail-block">
                <p className="weather-detail-text">
                  Min temperature: <span id="mintemp">8.5°C</span>
                </p>
                <p className="weather-detail-text">
                  Max temperature: <span id="maxntemp">8.5°C</span>
                </p>
              </div>
              <div className="weather-detail-block">
                <p className="weather-detail-text">
                  Chanse of rain: <span id="rain">50%</span>
                </p>
                <p className="weather-detail-text">
                  Humidity: <span id="humidity">76%</span>
                </p>
                <p className="weather-detail-text">
                  UV index: <span id="uv">4.6</span>
                </p>
              </div>
              <div className="weather-detail-block">
                <p className="weather-detail-text">
                  Sunset: <span id="sunset">5:40 AM</span>
                </p>
                <p className="weather-detail-text">
                  Sunrise: <span id="sunrise">5:40 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherDetail;
