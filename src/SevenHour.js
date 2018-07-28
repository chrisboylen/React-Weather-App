import React from 'react';
import SevenHourCard from './SevenHourCard';

const SevenHour = (props) => {
	return props.sevenHour.map((hour, i) => {
		return	(
			<div className = "seven-hour" key={ i }>
				<SevenHourCard hour={ hour } />
			</div>
		)
	})
};

export default SevenHour;