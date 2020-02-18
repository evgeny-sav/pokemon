import React from 'react';
import { create } from 'react-test-renderer';
import PokemonCard from '../PokemonCard';

describe('PokemonCard', () => {
  it('should render', () => {
    const component = create(
      <PokemonCard pokemon={{ name: 'test', sprites: {} }} />,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
