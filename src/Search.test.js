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
    expect(wrapper.state()).toEqual({ input: '' })
  })

  it('should render a Search component that contains a form with and input field and a submit button', () => {
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('button').length).toEqual(1)
    expect(wrapper.find('form').length).toEqual(1)
  })

  

  it('should ')
})