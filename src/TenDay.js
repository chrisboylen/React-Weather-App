import React from 'react'
import Card from './Card'


const TenDay = (props) => {
	return (
		<div className="ten-day">
			{
				props.tenDay.map((day, i) => {
					let tenDayKey = i

					return  <Card
						day={ day.day }
						icon={ day.icon }
						high={ day.high }
						low={ day.low }
						key={ tenDayKey }
					/>
				})
			}
		</div>
	)
}


export default TenDay