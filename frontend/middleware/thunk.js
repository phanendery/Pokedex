export const thunk = (action) => {
  switch (typeof action){
    case "function":
      return action(dispatch);
    default:
      return next(action);
  }
}

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)