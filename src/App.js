import React, { Component } from 'react';
import './App.css';
import Welcome from './Welcome';
import { currentWeatherCleaned } from './dataCleaner';
import CurrentWeather from './CurrentWeather';
import Search from './Search';
import mockData from './mockData';
import { API_K } from './api';


class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
      currentWeather: [],
      sevenHour: [],
      tenDay: []
    }
  }

  getUserLocation = (mockData) => {
    this.setState({
      currentWeather: currentWeatherCleaned(mockData)
    })
  }

  render() {
    return (
      <div className="app">
        <Welcome />
        <Search />
        <CurrentWeather currentWeather={currentWeatherCleaned(mockData)} />
      </div>
    );
  }
}

export default App;
