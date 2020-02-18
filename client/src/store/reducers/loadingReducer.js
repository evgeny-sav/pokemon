import constants from '../../constants';

export const initialState = {
  isLoading: true,
};

const actions = {
  [constants.LOADING]: state => ({ ...state, ...initialState }),
  [constants.LOADED]: (state, action) => action.payload,
};

const loadingReducer = (state = initialState, action) =>
  actions[action.type] ? actions[action.type](state, action) : state;

export default loadingReducer;
