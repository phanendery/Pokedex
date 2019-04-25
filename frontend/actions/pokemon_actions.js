export const RECIEVE_ALL_POKEMON = "RECIEVE_ALL_POKEMON"

export const receiveAllPokemon = (pokemon) => ({
  type: RECIEVE_ALL_POKEMON,
  pokemon
})