import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import WeatherDetail from "../WeatherDetail/WeatherDetail";
import WeatherCard from "../WeatherCard/WeatherCard";
import { forecastRequest } from "../../actions/forecast";

class App extends Component {
  state = {
    activeCard: 0,
  };

  componentDidMount() {
    this.props.forecastRequest("Chernivtsi");
  }

  setActive = (index) => {
    this.setState((state) => ({ activeCard: index }));
  };

  render() {
    const { activeCard } = this.state;
    const { data, city, error } = this.props.forecast;

    if(!data) {
      return <h3 className="info">Loading...</h3>
    }

    if(error) {
      return <h3 className="info">Something wrong.</h3>
    }

    return (
      <div className="App">
        <WeatherDetail
          data={data[activeCard]}
          city={city}
        />
        <div className="forecast">
          {data.map((card, i) => {
            return (
              <WeatherCard
                key={i}
                index={i}
                date={card.date}
                condition={card.day.condition}
                avgtemp_c={card.day.avgtemp_c}
                isActive={activeCard === i}
                setActive={this.setActive}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { forecastRequest };
const mapStateToProps = (state) => ({
  forecast: state.forecast,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
