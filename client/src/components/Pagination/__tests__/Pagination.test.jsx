import React from 'react';
import { create } from 'react-test-renderer';
import Pagination from '../Pagination';

describe('Pagination', () => {
  it('should render', () => {
    const component = create(<Pagination />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
