import { shallow } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../pages/index';

describe('Check the <Home /> Component', () => {
  const wrapper = shallow(<Home />);
  it('Renders the component with a "title" prop', () => {
    expect(wrapper.prop('title')).toBeDefined();
  });

  it('Check that the "title" prop is not an empty string', () => {
    expect(wrapper.prop('title')).not.toBe('');
  });
});
