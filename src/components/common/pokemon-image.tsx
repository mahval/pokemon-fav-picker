import { Pokemon } from '../../types/types';

interface PokemonImageProps {
  pokemon: Pokemon;
}

export const PokemonImage = ({ pokemon }: PokemonImageProps) => <img src={pokemon.spriteUrl} alt={pokemon.name} />;
