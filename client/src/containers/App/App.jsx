import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import PokemonCard from '../../components/PokemonCard';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { fetchAllPokemons } from '../../store/actions/pokemonsActions';

import './App.scss';

const App = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { isLoading, pokemons } = useSelector(state => {
    return {
      isLoading: state.loading.isLoading,
      pokemons: state.pokemons.data,
    };
  }, shallowEqual);
  const { nextLink, previousLink, count } = pokemons;

  useEffect(() => {
    dispatch(fetchAllPokemons());
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <div className="App">
        <div className="pagination-btns">
          <Pagination
            previousLink={previousLink}
            nextLink={nextLink}
            page={page}
            setPage={setPage}
            count={count}
          />
        </div>
        <div className="cards">
          {pokemons.data.map(pokemon => (
            <PokemonCard
              key={`${pokemon.name}_${Date.now()}`}
              pokemon={pokemon}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default App;
