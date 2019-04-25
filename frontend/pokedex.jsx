import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_utl.js';
import { receiveAllPokemon } from './actions/pokemon_actions.js';
// import { store };

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>,rootEl);
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
});