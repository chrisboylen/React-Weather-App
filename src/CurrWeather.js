import React from 'react';
import currentWeatherCleaned from './dataCleaner';


const CurrentWeather = (data) => {
  return (
    <div className="currentWeather">
      city = {data.weather.city}
      condition = {data.weather.condition}
      day = {data.weather.day}
      temp = {data.weather.temp}
      high = {data.weather.high}
      low = {data.weather.low}
      summary = {data.weather.summary}
    </div>
  )
}

export default CurrentWeather;