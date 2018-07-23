import React from 'react';
import { shallow, mount } from 'enzyme';
import Cart from './Card';
import { currentWeatherCleaned, sevenHourCleaned, tenDayCleaned } from './dataCleaner';
import data from './mockData';
import Card from './Card';

describe('Card', () => {
  it('should exist', () => {
    let wrapper = shallow(<Card />);

    expect(wrapper).toBeDefined()
  })

  
})