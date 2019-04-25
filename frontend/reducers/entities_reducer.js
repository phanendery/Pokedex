import combineReducers from 'redux';
import { pokemonReducer } from "frontend/reducers/pokemon_reducer.js";

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
})