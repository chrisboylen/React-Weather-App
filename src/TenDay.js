import React from 'react';
import Card from './Card';


const TenDay = (props) => {
	return props.tenDay.map((day, i) => {
		return	(
			<div className = "ten-day" key={ i }>
				<Card day={ day }  />
			</div>
		);
	})
}


export default TenDay;