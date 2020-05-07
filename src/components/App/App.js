import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import WeatherDetail from "../WeatherDetail/WeatherDetail";
import WeatherCard from "../WeatherCard/WeatherCard";
import { forecastRequest } from "../../actions/forecast";
import Search from "../Search";

class App extends Component {
  state = {
    activeCard: 0,
    search: "",
  };

  // default city
  componentDidMount() {
    this.props.forecastRequest("Chernivtsi");
  }

  // change active card
  setActive = (index) => {
    this.setState((state) => ({ ...state, activeCard: index }));
  };

  // get forecast from search value
  searchRequest = (value) => {
    this.props.forecastRequest(value);
    this.setState((state) => ({ ...state, activeCard: 0 }));
  };

  render() {
    const { activeCard } = this.state;
    const { data, city, error } = this.props.forecast;

    // waiting data loading
    if (!data) {
      return <h3 className="info">Loading...</h3>;
    }

    return (
      <div className="App">
        <Search searchRequest={this.searchRequest} />
        {error ? (
          <h3 className="info">No matching location found.</h3>
        ) : (
          <div className="forecast">
            <WeatherDetail data={data[activeCard]} city={city.toLocaleUpperCase()} />
            <div className="forecast-cards">
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
        )}
      </div>
    );
  }
}

const mapDispatchToProps = { forecastRequest };
const mapStateToProps = (state) => ({
  forecast: state.forecast,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
