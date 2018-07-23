import React from 'react';
import Card from './Card';

const CurrentWeather = (props) => {
  return (
    <div>
    <Card
      city = { props.currentWeather.city }
      condition = { props.currentWeather.condition }
      currentDay = { props.currentWeather.day }
      temp = { props.currentWeather.temp }
      high = { props.currentWeather.high }
      low = { props.currentWeather.low }
      summary = { props.currentWeather.summary }
    />
    </div>
  )
}

export default CurrentWeather;