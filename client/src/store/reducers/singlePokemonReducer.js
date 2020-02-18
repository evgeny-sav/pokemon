import constants from '../../constants';

export const initialState = {
  data: {
    id: 0,
    height: 0,
    weight: 0,
    moves: [],
    stats: [],
    abilities: [],
    name: '',
    sprites: {},
  },
};

const actions = {
  [constants.POKEMON_FETCH_STARTED]: state => state,
  [constants.POKEMON_FETCH_ERROR]: (state, action) => {
    throw Error(action.payload);
  },
  [constants.POKEMON_FETCH_COMPLETED]: (state, action) => action.payload,
};

const singlePokemonReducer = (state = initialState, action) =>
  actions[action.type] ? actions[action.type](state, action) : state;

export default singlePokemonReducer;
