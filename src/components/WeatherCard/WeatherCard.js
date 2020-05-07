import React, { PureComponent } from "react";
import "./WeatherCard.css";

class WeatherCard extends PureComponent {

  // set active card
  setActive = () => {
    this.props.setActive(this.props.index)
  }
  render() {

    const {date, condition, avgtemp_c, isActive} = this.props;
    return (
      <div className={"weather-card " + (isActive ? "active" : "")} onClick={this.setActive}>
        <p className="weather-card-text" id="date">
          {date}
        </p>
        <img src={condition && condition.icon} alt={condition && condition.text} className="weather-card-icon"/>
        <h3 className="weather-cart-temp">{avgtemp_c}°C</h3>
        <p className="weather-cart-text" id="condition">
          {condition && condition.text}
        </p>
      </div>
    );
  }
}

export default WeatherCard;
