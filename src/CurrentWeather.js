import React from 'react';

const CurrentWeather = (props) => {
	return (
		<div className="cur">
			< div className = "current-weather" >
				<h1>{ props.currentWeather.temp }°F</h1>
				<span className="side-weather">
					<h3 className="current-day">{ props.currentWeather.currentDay } 
						<span> | High:</span> { props.currentWeather.high } | <span>Low:</span> { props.currentWeather.low } | <span> { props.currentWeather.condition } </span> 
					</h3>
					<h2>{ props.currentWeather.city }</h2>
					<h3 className="sum">{ props.currentWeather.summary } </h3>
	 			</span>
	 		</div>
		</div>
	);
};

export default CurrentWeather;