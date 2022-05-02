import types from '../assets/typeList.json';
import { PokemonType } from '../types/types';

export const useTypes = (): PokemonType[] => {
  if (typeof types === 'undefined') {
    return [];
  }

  types.map((t) => t.toString());

  return types.filter(isPokemonType);
};

const isPokemonType = (type: string): type is PokemonType => {
  const enumValues: string[] = Object.values(PokemonType);
  return enumValues.includes(type);
};
