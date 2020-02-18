import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import pokemonsReducer from './reducers/pokemonsReducer';
import singlePokemonReducer from './reducers/singlePokemonReducer';
import loadingReducer from './reducers/loadingReducer';

const composeEnhancers = composeWithDevTools({});
const reducers = combineReducers({
  pokemons: pokemonsReducer,
  pokemon: singlePokemonReducer,
  loading: loadingReducer,
});
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, composeEnhancers(middleware));

export default store;
