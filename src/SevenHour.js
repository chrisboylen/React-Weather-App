import React from 'react';
import Card from './Card';

const SevenHour = (props) => {
  return (
    <div>
    <Card
      condition = {props.sevenHour.condition}
      hour = {props.sevenHour.hour}
      temp = {props.sevenHour.temp}
      conditionIcon = {props.sevenHour.conditionIcon}

    />
    </div>
  )
};



export default SevenHour;