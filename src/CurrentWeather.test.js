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

		expect(wrapper.find('.cur').length).toEqual(1);
	});

	it('should render a CurrentWeather component with the correct props', () => {
		let mockData = currentWeatherCleaned(data);
		let wrapper = mount(<CurrentWeather currentWeather={ mockData }
		/>);

		expect(wrapper.find('.cur').length).toEqual(1);
		expect(wrapper.props().currentWeather.city).toEqual('Louisville');
		expect(wrapper.props().currentWeather.condition).toEqual('Mostly Cloudy');
		expect(wrapper.props().currentWeather.currentDay).toEqual('Wednesday');
		expect(wrapper.props().currentWeather.temp).toEqual('46');
		expect(wrapper.props().currentWeather.high).toEqual('51');
		expect(wrapper.props().currentWeather.low).toEqual('32');
		expect(wrapper.props().currentWeather.summary).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.');
	});
});