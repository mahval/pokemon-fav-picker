import pokemon from '../assets/pokemonList.json';
import { Pokemon, PokemonType } from '../types/types';

export const usePokemonWithType = (type: PokemonType): Pokemon[] => {
  if (typeof pokemon === 'undefined') {
    return [];
  }

  return pokemon.filter((pokemon) => pokemon.types.some((pokemonType) => pokemonType === type));
};
