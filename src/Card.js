import React from 'react';

const Card = (props) => {
  return (
    <div className="current-weather">
      <h2>{props.city}</h2>
      <h2>{props.condition}</h2>
      <p className="day">{props.day}</p>
      <h1>{props.temp}</h1>
      <h3><span>High:</span> {props.high} | <span>Low:</span> {props.low} </h3>
      <p className="sum">{props.summary} </p>
    </div>
    )
}

export default Card;