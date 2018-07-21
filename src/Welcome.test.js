import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from './Welcome';

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<Welcome />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})