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
      currentWeather: [],
      sevenHour: [],
      tenDay: []
    })
  })

  it('should render a header and todontlist componet', () => {
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('ToDontList').length).toEqual(1);
  })
  

})