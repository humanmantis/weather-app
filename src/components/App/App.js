import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import WeatherDetail from "../WeatherDetail/WeatherDetail";
import WeatherCard from "../WeatherCard/WeatherCard";
import { forecastRequest } from '../../actions/forecast';

class App extends Component {
  componentDidMount() {
    this.props.forecastRequest('Chernivtsi');
    console.log('request');
  }
  render() {
    console.log('this.props :>> ', this.props);
    return (
      <div className="App">
        <WeatherDetail></WeatherDetail>
        <div className="forecast">
          <WeatherCard></WeatherCard>
          <WeatherCard></WeatherCard>
          <WeatherCard></WeatherCard>
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
