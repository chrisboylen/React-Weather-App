import React from 'react';
import Card from './Card';


const TenDay = (props) => {
  return (
    <div>
    <Card
      day = {props.tenDay.day}
      high = {props.tenDay.high}
      low = {props.tenDay.low}
      condition = {props.tenDay.condition}
      humidity = {props.tenDay.humidity}
    />
    </div>
  )
};

export default TenDay;