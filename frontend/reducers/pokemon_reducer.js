import { RECIEVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECIEVE_ALL_POKEMON:
      const keys = Object.keys(action.pokemon);
      keys.forEach(pokemon_id => {
        newState[pokemon_id] = action.pokemon[pokemon_id]
      })
      return newState;
    default:
      return state;
  }
}