import React from 'react';
import { create } from 'react-test-renderer';
import Loading from '../../../components/Loading';
import Pokemon from '../Pokemon';

jest.mock('../../../components/Loading', () => 'Loading');
jest.mock('../../../components/StatsTable', () => 'StatsTable');
jest.mock('../../../components/Slider', () => 'Slider');
jest.mock('../../../components/GoBackButton', () => 'GoBackButton');

jest.mock('react-router-dom', () => ({
  useRouteMatch: () => jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest
    .fn()
    .mockImplementationOnce(() => {
      return {
        isLoading: true,
        pokemon: {},
      };
    })
    .mockImplementationOnce(() => {
      return {
        isLoading: false,
        pokemon: {
          name: 'name',
        },
      };
    }),
}));

describe('Pokemon', () => {
  it('should render loading', () => {
    const component = create(<Pokemon />);
    expect(component.root.findByType(Loading).type).toBe('Loading');
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with pokemon data', () => {
    const component = create(<Pokemon />);
    expect(component.toJSON().children[0].props.className).toEqual('Pokemon');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
