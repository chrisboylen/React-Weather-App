import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from './Search';

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
})