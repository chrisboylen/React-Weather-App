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

  getUserLocation = (input) => {
    const url = `http://api.wunderground.com/api/${API_K}//conditions/geolookup/hourly/forecast10day/q/${input}.json`;

    fetch(url)
      .then(data => data.json())
      .then(parsedData => {
        console.log(parsedData)
        this.setState({
          location: input,
          currentWeather: currentWeatherCleaned(parsedData)
          
        })
      })
      // .catch(err => )
  }

  render() {
    return (
      <div className="app">
        <Welcome />
        <Search getUserLocation={ this.getUserLocation } />
        <CurrentWeather currentWeather={ this.state.currentWeather } />
      </div>
    );
  }
}

export default App;
