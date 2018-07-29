import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from './TenDay';
import { tenDayCleaned } from './dataCleaner';
import data from './mockData';
import TenDayCard from './TenDayCard';

describe('TenDay', () => {
	let wrapper;

	beforeEach(() => {
		localStorage.clear();
		wrapper = shallow(<TenDay tenDay={[]} />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should render the appropriate card components', () => {
		const mockData = tenDayCleaned(data);
		const wrapper = mount(<TenDayCard 
			day={ mockData[0].day }
			icon={ mockData[0].icon }
			high={ mockData[0].high }
			low={ mockData[0].low }
		/>);
		
		expect(wrapper.find('TenDayCard').length).toEqual(1);
		expect(wrapper.props().day).toEqual('Wednesday');
		expect(wrapper.props().icon).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
		expect(wrapper.props().high).toEqual('51');
		expect(wrapper.props().low).toEqual('32');
	});
});