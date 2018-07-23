import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from './TenDay';

describe('TenDay', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<TenDay tenDay={[]} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})