import constants from '../../constants';

export const initialState = {
  data: {
    nextLink: '',
    previousLink: '',
    count: 0,
    data: [],
  },
};

const actions = {
  [constants.ALL_POKEMONS_FETCH_STARTED]: state => state,
  [constants.ALL_POKEMONS_FETCH_ERROR]: (state, action) => {
    throw Error(action.payload);
  },
  [constants.ALL_POKEMONS_FETCH_COMPLETED]: (state, action) => action.payload,
};

const pokemonsReducer = (state = initialState, action) =>
  actions[action.type] ? actions[action.type](state, action) : state;

export default pokemonsReducer;
