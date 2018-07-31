import React from 'react';

const TenDayCard = (props) => {
	return (
		<div className="ten-day-wrapper">
			<span className="ten-day-element">
				<p>{ props.day.day }</p>
				<img src={ props.day.icon } alt="Weather icon"/>
				<p>{ props.day.high } | { props.day.low }</p>
			</span>
		</div>
	);
};

export default TenDayCard;