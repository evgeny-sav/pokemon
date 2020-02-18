import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Container } from 'react-bootstrap';

import Loading from '../../components/Loading';
import StatsTable from '../../components/StatsTable';
import Slider from '../../components/Slider';
import GoBackButton from '../../components/GoBackButton';
import capitalize from '../../utils/capitalize';
import { fetchPokemon } from '../../store/actions/singlePokemonActions';
import './Pokemon.scss';

const Pokemon = () => {
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const { isLoading, pokemon } = useSelector(state => {
    return {
      isLoading: state.loading.isLoading,
      pokemon: state.pokemon.data,
    };
  }, shallowEqual);
  const { name } = pokemon;

  useEffect(() => {
    dispatch(fetchPokemon(url));
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <div className="Pokemon">
        <div className="goback">
          <GoBackButton />
        </div>

        <div className="content">
          <div className="slider">
            <Slider />
          </div>

          <div className="info">
            <h3 className="mb-5">{capitalize(name)}</h3>
            <StatsTable pokemon={pokemon} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pokemon;
