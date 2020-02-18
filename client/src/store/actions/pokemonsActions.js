import constants from '../../constants';
import { PokemonAPI } from '../../api/pokemonAPI';
import { loaded, loading } from './loadingActions';

export const fetchStarted = () => ({
  type: constants.ALL_POKEMONS_FETCH_STARTED,
});

export const fetchError = e => ({
  type: constants.ALL_POKEMONS_FETCH_ERROR,
  payload: e,
});

export const fetchCompleted = payload => ({
  type: constants.ALL_POKEMONS_FETCH_COMPLETED,
  payload,
});

export const fetchPrev = url => async dispatch => {
  const offset = url.slice(url.indexOf('?'));
  dispatch(loading());
  dispatch(fetchStarted());
  try {
    const payload = await PokemonAPI.getPrev(offset);
    dispatch(fetchCompleted(payload));
  } catch (e) {
    dispatch(fetchError(e));
  }
  dispatch(loaded(false));
};

export const fetchNext = url => async dispatch => {
  const offset = url.slice(url.indexOf('?'));
  dispatch(loading());
  dispatch(fetchStarted());
  try {
    const payload = await PokemonAPI.getNext(offset);
    dispatch(fetchCompleted(payload));
  } catch (e) {
    dispatch(fetchError(e));
  }
  dispatch(loaded(false));
};

export const fetchPage = pageNum => async dispatch => {
  dispatch(loading());
  dispatch(fetchStarted());
  try {
    const payload = await PokemonAPI.getPage(pageNum);
    dispatch(fetchCompleted(payload));
  } catch (e) {
    dispatch(fetchError(e));
  }
  dispatch(loaded(false));
};

export const fetchAllPokemons = () => async dispatch => {
  dispatch(loading());
  dispatch(fetchStarted());
  try {
    const payload = await PokemonAPI.getAll();
    dispatch(fetchCompleted(payload));
  } catch (e) {
    dispatch(fetchError(e));
  }
  dispatch(loaded(false));
};
