import React from 'react'
import Card from './Card'

const CurrentWeather = (props) => {
	return (
		<div className="cur">
			<Card
				city = { props.currentWeather.city }
				condition = { props.currentWeather.condition }
				currentDay = { props.currentWeather.currentDay }
				temp = { props.currentWeather.temp }
				high = { props.currentWeather.high }
				low = { props.currentWeather.low }
				summary = { props.currentWeather.summary }
			/>
		</div>
	)
}

export default CurrentWeather