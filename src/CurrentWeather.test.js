import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from './CurrentWeather';
import { currentWeatherCleaned } from './dataCleaner';
import data from './mockData';

describe('CurrentWeather', () => {
	let wrapper;

	beforeEach(() => {
		localStorage.clear();
		wrapper = shallow(<CurrentWeather currentWeather={[]} />);
	});
  
	it('Should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should render the appropriate card components', () => {
		const mockData = currentWeatherCleaned(data);
		const wrapper = mount(<CurrentWeather currentWeather={ mockData } />);

		expect(wrapper.find('Card').length).toEqual(1);
	});
});