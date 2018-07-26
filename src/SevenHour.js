import React from 'react';
import Card from './Card';

const SevenHour = (props) => {
  return (

    <div className="seven-hour">
      {
        props.sevenHour.map((hour, i) => {
          let sevenHourKey = i;

          return  <div key={ sevenHourKey }>
                    <Card
                      hour={ hour.hour }
                      icon={ hour.icon }
                      temp={ hour.temp }
                    />  
                  </div>     
        })
      }
    </div>
  )
}

export default SevenHour;