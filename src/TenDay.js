import React from 'react';
import Card from './Card';


const TenDay = (props) => {
  return (
    <div className="ten-day">
      {
        props.tenDay.map((day, i) => {
          let tenDayKey = i;

          return  <div key={ tenDayKey }>
                    <Card
                      day={ day.day }
                      icon={ day.icon }
                      high={ day.high }
                      low={ day.low }
                    />
                  </div>
        })
      }
    </div>
  )
}


export default TenDay;