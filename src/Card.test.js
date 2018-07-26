import React from 'react';
import { shallow, mount } from 'enzyme';
import { currentWeatherCleaned, sevenHourCleaned, tenDayCleaned } from './dataCleaner';
import data from './mockData';
import Card from './Card';

describe('Card', () => {
  it('should exist', () => {
    let wrapper = shallow(<Card />);

    expect(wrapper).toBeDefined()
  })

  it('should render a CurrentWeather component with the correct props', () => {
    let mockData = currentWeatherCleaned(data);
    let wrapper = mount(<Card
                          city={ mockData.city }
                          condition={ mockData.condition }
                          currentDay={ mockData.currentDay }
                          temp={ mockData.temp }
                          high={ mockData.high }
                          low={ mockData.low }
                          summary={ mockData.summary }
                        />);

    expect(wrapper.find('.current-weather').length).toEqual(1);
    expect(wrapper.props().city).toEqual('Louisville');
    expect(wrapper.props().condition).toEqual('Mostly Cloudy');
    expect(wrapper.props().currentDay).toEqual('Wednesday');
    expect(wrapper.props().temp).toEqual('46');
    expect(wrapper.props().high).toEqual('51');
    expect(wrapper.props().low).toEqual('32');
    expect(wrapper.props().summary).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.');
  })

  it('should render an hour card with the correct props', () => {
    let mockData = sevenHourCleaned(data);
    let wrapper = mount(<Card 
                          hour={ mockData[0].hour }
                          src={ mockData[0].icon }
                          temp={ mockData[0].temp }
                        />);
    expect(wrapper.find('.seven-hour').length).toEqual(1);
    expect(wrapper.props().hour).toEqual('12:00 PM');
    expect(wrapper.props().src).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
    expect(wrapper.props().temp).toEqual('47');
  })

  it('should render a TenDay component with the correct props', () => {
    let mockData = tenDayCleaned(data);
    let wrapper = mount(<Card 
                          day={ mockData[0].day }
                          icon={ mockData[0].icon }
                          high={ mockData[0].high }
                          low={ mockData[0].low }
                        />);

    expect(wrapper.find('.ten-day').length).toEqual(1);
    expect(wrapper.props().day).toEqual('Wednesday');
    expect(wrapper.props().icon).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
    expect(wrapper.props().high).toEqual('51');
    expect(wrapper.props().low).toEqual('32');
  })
})