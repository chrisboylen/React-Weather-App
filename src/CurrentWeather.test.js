import React from 'react'
import { shallow } from 'enzyme'
import CurrentWeather from './CurrentWeather'

describe('CurrentWeather', () => {
	let wrapper

	beforeEach(() => {
		localStorage.clear()
		wrapper = shallow(<CurrentWeather currentWeather={[]} />)
	})
  
	it('Should exist', () => {
		expect(wrapper).toBeDefined()
	})
})