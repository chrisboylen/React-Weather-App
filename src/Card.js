import React from 'react';

const Card = (props) => {
  if (props.city) {
    return (
      <div className="current-weather">
        <h2>{props.city}</h2>
        <h2>{props.condition}</h2>
        <p className="day">{props.day} TODAY</p>
        <h1>{props.temp}</h1>
        <h3><span>High:</span> {props.high} | <span>Low:</span> {props.low} </h3>
        <p className="sum">{props.summary} </p>
      </div>
    )
  } if (props.humidity) {
      return (
        <div className="ten-day">
          <h2>{props.condition}</h2>
          <p className="day">{props.day} </p>
          <h3><span>High:</span> {props.high} | <span>Low:</span> {props.low} </h3>
          <p className="humidity">{props.humidity} </p>
        </div>
    )
  } if (props.hour) {
      return (
        <div className="seven-day">
          <h2>{props.condition}</h2>
          <p className="day">{props.day} TODAY</p>
          <p className="hour">{props.hour} HOUR</p>
          <h3><span>Temperature:</span> {props.temp} </h3>
        </div>
    )
  }
};



export default Card;