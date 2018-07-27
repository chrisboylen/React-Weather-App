import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './Welcome';

describe('Welcome', () => {
	let wrapper;

	beforeEach(() => {
		localStorage.clear();
		wrapper = shallow(<Welcome />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should render an h5 element', () => {
		let messageDiv = wrapper.find('h5');

		expect(messageDiv).toBeDefined();
		expect(messageDiv.text()).toEqual('Welcome to Weatherly');
	});
});