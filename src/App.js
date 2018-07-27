import React, { Component } from 'react';
import './App.css';
import { currentWeatherCleaned, sevenHourCleaned, tenDayCleaned } from './dataCleaner';
import Welcome from './Welcome';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Search from './Search';
import { API_K } from './api';

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
      currentWeather: [],
      sevenHour: [],
      tenDay: [], 
      hasError: false
    }
  }

  componentDidMount() {
    const location = localStorage.getItem('location');
    if (location) {
    this.getUserLocation(location);
    }
  }

  getUserLocation = (input) => {
    const url = `http://api.wunderground.com/api/${API_K}//conditions/geolookup/hourly/forecast10day/q/${input}.json`;

    fetch(url)
      .then(data => data.json())
      .then(parsedData => {
        this.setState({
          input: input,
          currentWeather: currentWeatherCleaned(parsedData),
          sevenHour: sevenHourCleaned(parsedData),
          tenDay: tenDayCleaned(parsedData), 
          hasError: false
        })
        this.sendLocalStorage(input)
      })
      .catch(error => {
        this.setState({
          hasError: true
        })
      })
  }
  
  sendLocalStorage(location){
    localStorage.setItem('location', location);
  }

  renderWeather() {
    return (
      <div className="weather">
        <Search getUserLocation={ this.getUserLocation } />
        <CurrentWeather currentWeather={ this.state.currentWeather } />
        <SevenHour sevenHour={ this.state.sevenHour } />
        <TenDay tenDay={ this.state.tenDay } />
      </div>
    )
  }

  renderErrorPage() {
    return (
      <div className="error">
        <h2 className="err-msg err-one">It looks as though something went wrong.</h2>
        <h2 className="err-msg err-two">Please enter a valid city, state to get your weather.</h2>
        <Search getUserLocation={ this.getUserLocation } />
      </div>
    )
  }

  renderWelcome() {
    return (
      <div className="welcome">
        <Welcome />
        <Search getUserLocation={ this.getUserLocation } />
      </div>
    )
  }

  render() {
    if (this.state.hasError) {
      return this.renderErrorPage()
    }
    
    if (this.state.input) {
      return this.renderWeather()
    } else {
      return this.renderWelcome()
    }
  }
}

export default App;
