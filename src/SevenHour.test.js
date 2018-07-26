import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from './SevenHour';
import { sevenHourCleaned } from './dataCleaner';
import data from './mockData';

describe('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<SevenHour sevenHour={[]} />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render the appropriate card components', () => {
    const mockData = sevenHourCleaned(data);
    const wrapper = mount(<SevenHour sevenHour={ mockData } />)

    expect(wrapper.find('.seven-hour').length).toEqual(8)
  })
})