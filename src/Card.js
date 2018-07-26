import React from 'react';

const Card = (props) => {
  if (props.city) {
    return (
      <div className="current-weather">
        <h1>{ props.temp }°F</h1>
        <span class="side-weather">
          <h2>{ props.city }</h2>
          <p className="current-day">{ props.currentDay }</p>
          <h3><span>High:</span> { props.high } | <span>Low:</span> { props.low } | <span> { props.condition } </span> </h3>
          <p className="sum">{ props.summary } </p>
        </span>
      </div>
    )
  }
  if (props.hour) {
    return (
      <div class="seven-hour-wrapper">
      <span class="seven-hour-element" className="seven-hour" id={ props.key }>
        <h4>{ props.hour }</h4>
        <img src={ props.icon } alt="Weather icon"/>
        <h4>{ props.temp }</h4>
        </span>
      </div>
    )
  }
  if (props.day) {
    return (
      <div class="ten-day-wrapper">
      <span class="ten-day-element" className="ten-day" id={ props.key }>
        <p>{ props.day }</p>
        <img src={ props.icon } alt="Weather icon"/>
        <p>{ props.high } | { props.low }</p>
      </span>
      </div>
    )
  }
}

export default Card;