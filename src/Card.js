import React from 'react';

const Card = (props) => {
  if (props.city) {
    return (
      <div className="current-weather">
        <h2>{ props.city }</h2>
        <h2>{ props.condition }</h2>
        <p className="current-day">{ props.currentDay }</p>
        <h1>{ props.temp }</h1>
        <h3><span>High:</span> { props.high } | <span>Low:</span> { props.low } </h3>
        <p className="sum">{ props.summary } </p>
      </div>
    )
  }
  if (props.hour) {
    return (
      <div className="seven-hour" id={ props.key }>
        <p>{ props.hour }</p>
        <img src={ props.icon } alt="Weather icon"/>
        <p>{ props.temp }</p>
      </div>
    )
  }
  if (props.day) {
    return (
      <div className="ten-day" id={ props.key }>
        <p>{ props.day }</p>
        <img src={ props.icon } alt="Weather icon"/>
        <p>{ props.high } | { props.low }</p>
      </div>
    )
  }
}

export default Card;