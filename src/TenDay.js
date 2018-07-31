import React from 'react';
import TenDayCard from './TenDayCard';

const TenDay = (props) => {
	return <div className = "ten-day">
		{
			props.tenDay.map((day, i) => {
				return	<TenDayCard day={ day } key={ i } />;
			})
		}
	</div>;
};


export default TenDay;