import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './CurrentWeather';
import CurrentWeather from './CurrentWeather';

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<CurrentWeather currentWeather={[]} />);
  })
  
  it('Should exist', () => {
    expect(wrapper).toBeDefined();
  })

})