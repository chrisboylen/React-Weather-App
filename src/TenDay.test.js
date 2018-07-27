import React from 'react'
import { shallow, mount } from 'enzyme'
import TenDay from './TenDay'
import { tenDayCleaned } from './dataCleaner'
import data from './mockData'

describe('TenDay', () => {
	let wrapper

	beforeEach(() => {
		localStorage.clear()
		wrapper = shallow(<TenDay tenDay={[]} />)
	})

	it('should exist', () => {
		expect(wrapper).toBeDefined()
	})

	it('should render the appropriate card components', () => {
		const mockData = tenDayCleaned(data)
		const wrapper = mount(<TenDay tenDay={ mockData } />)

		expect(wrapper.find('Card').length).toEqual(10)
	})
})