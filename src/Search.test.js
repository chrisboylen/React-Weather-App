import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from './Search';
import App from './App';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<Search />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a default state with an empty string of input', () => {
    expect(wrapper.state()).toEqual({ input: '', suggestedWords: [] })
  })

  it('should render a Search component that contains a form with and input field and a submit button', () => {
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
    expect(wrapper.find('form').length).toEqual(1)
  })

  it('should invoke getUserLocation when submit button is clicked', () => {
    const spy = jest.fn();
    wrapper = shallow(<Search getUserLocation={ spy } />);
    const button = wrapper.find('button');

    button.simulate('click')

    expect(spy).toHaveBeenCalled()
  })

  it('should update the input in state as the user enters information', () => {
    const input = wrapper.find('input');
    const mockState = { input: 'Denver, CO', suggestedWords: [] };

    wrapper.setState(mockState)

    wrapper.simulate('onchange')
    expect(wrapper.state()).toEqual(mockState)
  }) 

  it('should change state when submit button is clicked', () => {
    const spy = jest.fn();
    wrapper = shallow(<Search getUserLocation={ spy } />);
    const button = wrapper.find('button');
    const mockState = { input: 'Denver, CO', suggestedWords: [] }

    wrapper.setState(mockState)

    button.simulate('click')
    expect(wrapper.state()).toEqual(mockState);
  })

  it('should invoke updateLocation when submit button is clicked', () => {
    const spy = jest.fn();
    wrapper = shallow(<Search getUserLocation={ spy } />);
    const button = wrapper.find('button');

    button.simulate('click');
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  })
})