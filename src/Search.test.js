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
})