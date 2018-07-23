import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<App />);
  })
  
  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a default state with an empty array of currentWeather, sevenHour, and tenDay', () => {
    expect(wrapper.state()).toEqual({
      input: '',
      currentWeather: [],
      sevenHour: [],
      tenDay: []
    })
  })

  it('should render a welcome, and search if there is no input', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  })

  it('should render a Search, CurrentWeather, SevenHour and TenDay component if there is an input', () => {
    let mockState = {
      input: 'Denver, CO',
      currentWeather: [{}],
      sevenHour: [{}],
      tenDay: [{}]
    };

    wrapper.setState(mockState)

    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  })
  
  
})