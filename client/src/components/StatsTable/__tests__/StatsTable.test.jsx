import React from 'react';
import { create } from 'react-test-renderer';
import StatsTable from '../StatsTable';

jest.mock('react-redux', () => ({
  useSelector: () => ({
    id: '',
    height: '',
    weight: '',
    moves: [],
    stats: [],
    abilities: [],
  }),
}));

describe('StatsTable', () => {
  it('should render', () => {
    const component = create(<StatsTable />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
