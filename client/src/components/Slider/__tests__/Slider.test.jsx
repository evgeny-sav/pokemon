import React from 'react';
import { create } from 'react-test-renderer';
import Slider from '../Slider';

jest.mock('react-redux', () => ({
  useSelector: () => ({
    sprites: {},
  }),
}));

describe('Slider', () => {
  it('should render', () => {
    const component = create(<Slider />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
