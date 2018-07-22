import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from './SevenHour';

describe('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<SevenHour sevenHour={[]} />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})