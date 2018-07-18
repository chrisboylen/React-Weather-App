import React from 'react';
import currentWeatherCleaned from './dataCleaner';


const CurrentWeather = (data) => {
  return (
    <div className="currentWeather">
      city = {data.currentWeather.city}
      condition = {data.currentWeather.condition}
      day = {data.currentWeather.day}
      temp = {data.currentWeather.temp}
      high = {data.currentWeather.high}
      low = {data.currentWeather.low}
      summary = {data.currentWeather.summary}
    </div>
  )
}

export default CurrentWeather;