import pokemon from '../assets/pokemonList.json';
import { Pokemon } from '../types/types';

export const usePokemonById = (id: number): Pokemon | null => {
  if (typeof pokemon === 'undefined') {
    return null;
  }

  const foundPokemon = pokemon.find(({ pokemonId }) => pokemonId === id);

  if (typeof foundPokemon === 'undefined') {
    return null;
  }

  return foundPokemon;
};
