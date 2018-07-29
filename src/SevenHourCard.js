import React from 'react';

const SevenHourCard = (props) => {
	return (
		<div className="seven-hour-wrapper">
			<h4>{ props.hour.hour }</h4>
			<img src={ props.hour.icon } alt="Weather icon"/>
			<h4>{ props.hour.temp }</h4>
		</div>
	);
};

export default SevenHourCard;