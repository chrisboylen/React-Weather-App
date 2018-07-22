import React, { Component } from 'react';
import './App.css';
import { currentWeatherCleaned, sevenHourCleaned, tenDayCleaned } from './dataCleaner';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import Search from './Search';
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

  getUserLocation = (input) => {
    const url = `http://api.wunderground.com/api/${API_K}//conditions/geolookup/hourly/forecast10day/q/${input}.json`;

    fetch(url)
      .then(data => data.json())
      .then(parsedData => {
        console.log(parsedData)
        this.setState({
          input: input,
          currentWeather: currentWeatherCleaned(parsedData),
          sevenHour: sevenHourCleaned(parsedData)
        })
      })
      // .catch(err => )
  }

  renderWeather() {
    return (
      <div className="weather">
        <Search getUserLocation={ this.getUserLocation } />
        <CurrentWeather currentWeather={ this.state.currentWeather } />
        <SevenHour sevenHour={ this.state.sevenHour} />
      </div>
    )
  }

  renderWelcome() {
    return (
      <div className="welcome">
        <Welcome / >
        <Search getUserLocation={ this.getUserLocation } />
      </div>
    )
  }

  render() {
    return (
      <div className="app">
        { this.state.input ? this.renderWeather() : this.renderWelcome() }
      </div>
    )
  }
}

export default App;
