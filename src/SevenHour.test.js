import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from './SevenHour';
import SevenHourCard from './SevenHourCard';
import { sevenHourCleaned } from './dataCleaner';
import data from './mockData';
import { debug } from 'util';

describe('SevenHour', () => {
	let wrapper;

	beforeEach(() => {
		localStorage.clear();
		wrapper = shallow(<SevenHour sevenHour={[]} />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should render the appropriate card components', () => {
		const mockData = sevenHourCleaned(data);
		const wrapper = mount(<SevenHourCard
			hour={ mockData[0].hour }
			src={ mockData[0].icon }
			temp={ mockData[0].temp } 
		/>);

		expect(wrapper.find('.seven-hour-wrapper').length).toEqual(1);
		expect(wrapper.props().hour).toEqual('12:00 PM');
		expect(wrapper.props().src).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
		expect(wrapper.props().temp).toEqual('47');
	});
});