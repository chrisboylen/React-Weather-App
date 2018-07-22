import React from 'react';
import Card from './Card';

const TenDay = (props) => {
  return (
    <div className="ten-day">
      {
        props.tenDay.map((day, i) => {
          let tenDayKey = i;

          return  <Card
                    day={ props.day }
                    icon={ props.icon }
                    high={ props.high }
                    low={ props.low }
                  />
        })
      }
    </div>
  )
}

export default TenDay;