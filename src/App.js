import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import { currentWeatherCleaned } from './dataCleaner';
import CurrentWeather from './CurrentWeather';
import mockData from './mockData';


class App extends Component {
  constructor () {
    super();
    this.state = {
      currentWeather: []
    }
    this.displayWeather = this.displayWeather.bind(this)
  }

  displayWeather(mockData) {
    this.setState({
      currentWeather: currentWeatherCleaned(mockData)
    })
  }

  render() {
    return (
      <div className="app">
        <Welcome />
        <CurrentWeather currentWeather={currentWeatherCleaned(mockData)} />
      </div>
    );
  }
}

export default App;
