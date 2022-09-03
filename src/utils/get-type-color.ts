import { PokemonType, PokemonTypeColor, PokemonTypeColorMap } from '../types/types';

export const getTypeColor = (type: PokemonType): PokemonTypeColor => PokemonTypeColorMap[type];
