import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { currentWeatherCleaned, sevenHourCleaned, tenDayCleaned } from './dataCleaner';
import data from './mockData';

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
      tenDay: [], 
      hasError: false
    })
  })

  it('should render a welcome, and search if there is no input', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  })

  it('should invoke renderWeather when there is an input', () => {
    wrapper.instance().renderWeather = jest.fn();
    const mockState = { input: 'Denver, CO' };

    wrapper.setState(mockState)

    expect(wrapper.instance().renderWeather).toHaveBeenCalled()
  })

  it('should render a Search, CurrentWeather, SevenHour and TenDay component if there is an input', () => {
    let mockState = {
      input: 'Denver, CO',
      currentWeather: [{}],
      sevenHour: [{}],
      tenDay: [{}],
      hasError: false
    };

    wrapper.setState(mockState)

    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  })
  
  it('should render an error and search component when there is an error', () => {
    let mockState = {
      input: 'Denver, CO',
      currentWeather: [{}],
      sevenHour: [{}],
      tenDay: [{}],
      hasError: true
    };

    wrapper.setState(mockState)

    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('CurrentWeather').length).toEqual(0);
    expect(wrapper.find('SevenHour').length).toEqual(0);
    expect(wrapper.find('TenDay').length).toEqual(0);
  })

  it('should show error message when there is an error', () => {
    let wrapper = mount(<App />)
    let mockState = {
      input: 'Denver, CO',
      currentWeather: [{}],
      sevenHour: [{}],
      tenDay: [{}],
      hasError: true
    };
    
    wrapper.setState(mockState)
    let messageDiv = wrapper.find('.err-msg');
    
    expect(messageDiv).toBeDefined();
    expect(messageDiv.text()).toEqual("It looks as though something went wrong.")
  })
  
  it('should retrieve data from local storage on mount', () => {
    localStorage.setItem('input', 'denver, co')
    const mockData =  localStorage.getItem('input')
    const wrapper = mount(<App input={ mockData } />);

    expect(wrapper.props().input).toEqual('denver, co');
  })
})