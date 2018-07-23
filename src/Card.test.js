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

  it('should render a current weather card', () => {
    let mockData = currentWeatherCleaned(data);
    let wrapper = mount(<Card
                          city = { mockData.city }
                          condition = { mockData.condition }
                          currentDay = { mockData.currentDay }
                          temp = { mockData.temp }
                          high = { mockData.high }
                          low = { mockData.low }
                          summary = { mockData.summary }
                        />);
      console.log(wrapper.debug());

    expect(wrapper.find('.current-weather').length).toEqual(1);
    expect(wrapper.props().city).toEqual('Louisville');
    expect(wrapper.props().condition).toEqual('Mostly Cloudy');
    expect(wrapper.props().currentDay).toEqual('Wednesday');
    expect(wrapper.props().temp).toEqual(46);
    expect(wrapper.props().high).toEqual('51');
    expect(wrapper.props().low).toEqual('32');
    expect(wrapper.props().summary).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.');
  })
})