import constants from '../../constants';
import { PokemonAPI } from '../../api/pokemonAPI';
import { loaded, loading } from './loadingActions';

export const fetchStarted = () => ({
  type: constants.POKEMON_FETCH_STARTED,
});

export const fetchError = e => ({
  type: constants.POKEMON_FETCH_ERROR,
  payload: e,
});

export const fetchCompleted = payload => ({
  type: constants.POKEMON_FETCH_COMPLETED,
  payload,
});

export const fetchPokemon = url => async dispatch => {
  dispatch(loading());
  dispatch(fetchStarted());
  try {
    const payload = await PokemonAPI.getById(url);
    dispatch(fetchCompleted(payload));
  } catch (e) {
    dispatch(fetchError(e));
  }
  dispatch(loaded(false));
};
