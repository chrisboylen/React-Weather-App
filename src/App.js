import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import currentWeatherCleaned from './dataCleaner';
import CurrentWeather from './CurrWeather';

class App extends Component {
  constructor () {
    super();
    this.state = {
      currentWeather: currentWeather || []
    }
  }
  render() {
    return (
      <div className="app">
        <Welcome />
        <CurrentWeather currentWeather={this.state.currentWeather} />
      </div>
    );
  }
}

export default App;
