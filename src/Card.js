import React from 'react';

const Card = (props) => {
  if (props.city) {
    return (
      <div className="current-weather">
        <h1>{ props.temp }°F</h1>
        <span className="side-weather">
          <h3 className="current-day">{ props.currentDay } 
            <span> | High:</span> { props.high } | <span>Low:</span> { props.low } | <span> { props.condition } </span> 
          </h3>
          <h2>{ props.city }</h2>
          <h3 className="sum">{ props.summary } </h3>
        </span>
      </div>
    )
  }
  if (props.hour) {
    return (
      <div className="seven-hour-wrapper" id={ props.key }>
        <span className="seven-hour-element" className="seven-hour" >
          <h4>{ props.hour }</h4>
          <img src={ props.icon } alt="Weather icon"/>
          <h4>{ props.temp }</h4>
        </span>
      </div>
    )
  }
  if (props.day) {
    return (
      <div className="ten-day-wrapper" id={ props.key }>
        <span className="ten-day-element" className="ten-day" >
          <p>{ props.day }</p>
          <img src={ props.icon } alt="Weather icon"/>
          <p>{ props.high } | { props.low }</p>
        </span>
      </div>
    )
  }
}

export default Card;