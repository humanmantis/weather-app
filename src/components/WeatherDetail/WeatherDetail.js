import React, { PureComponent } from "react";
import "./WeatherDetail.css";

class WeatherDetail extends PureComponent {
  render() {
    const { city, data } = this.props;
    console.log("this.props :>> ", this.props);
    if (!data) {
      return <h3 className="info">Almost ready...</h3>;
    }
    return (
      <div className="weather-detail">
        <h3>Weather in {city}</h3>
        <div className="weather-detail-container">
          <div className="weather-detail-container-sm">
            <p className="weather-detail-text" id="date">
              {data.date}
            </p>
            <img
              src={data.day.condition.icon}
              alt="Condition icon"
              className="weather-detail-icon"
            />
            <h3 className="weather-detail-temp" id="temp">
              {data.day.avgtemp_c}°C
            </h3>
            <p className="weather-detail-text" id="condition">
            {data.day.condition.text}
            </p>
          </div>
          <div className="weather-detail-container-lg">
            <h3 className="weather-detail-title">Day detail</h3>
            <div className="weather-detail-group">
              <div className="weather-detail-block">
                <p className="weather-detail-text">
                  Min temperature: <span id="mintemp">{data.day.mintemp_c}°C</span>
                </p>
                <p className="weather-detail-text">
                  Max temperature: <span id="maxntemp">{data.day.maxtemp_c}°C</span>
                </p>
              </div>
              <div className="weather-detail-block">
                <p className="weather-detail-text">
                  Chanse of rain: <span id="rain">{data.day.daily_chance_of_rain}%</span>
                </p>
                <p className="weather-detail-text">
                  Humidity: <span id="humidity">{data.day.avghumidity}%</span>
                </p>
                <p className="weather-detail-text">
                  UV index: <span id="uv">{data.day.uv}</span>
                </p>
              </div>
              <div className="weather-detail-block">
                <p className="weather-detail-text">
                  Sunset: <span id="sunset">{data.astro.sunset}</span>
                </p>
                <p className="weather-detail-text">
                  Sunrise: <span id="sunrise">{data.astro.sunrise}</span>
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
