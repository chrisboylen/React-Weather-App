import React from 'react';
import SevenHourCard from './SevenHourCard';

const SevenHour = (props) => {
	return <div className = "seven-hour">
		{
			props.sevenHour.map((hour, i) => {
				return	<SevenHourCard hour={ hour } key={ i } />;
			})
		}
	</div>;
};

export default SevenHour;