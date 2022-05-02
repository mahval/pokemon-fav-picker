import pokemon from '../assets/pokemonList.json';
import { Pokemon } from '../types/types';

export const useAllPokemon = (): Pokemon[] => {
  if (typeof pokemon === 'undefined') {
    return [];
  }

  return pokemon;
};
