import { PokemonType } from '../types/types';

export const isPokemonType = (type: string): type is PokemonType => {
  if (Object.values<string>(PokemonType).includes(type)) {
    return true;
  }
  return false;
};
