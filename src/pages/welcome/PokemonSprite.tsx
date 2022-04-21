interface PokemonSpriteProps {
  pokemonUrl: string;
}
export const PokemonSprite = ({ pokemonUrl }: PokemonSpriteProps) => <img src={pokemonUrl} alt={pokemonUrl} />;
