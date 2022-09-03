export enum PokemonType {
  Normal = 'normal',
  Fighting = 'fighting',
  Flying = 'flying',
  Poison = 'poison',
  Ground = 'ground',
  Rock = 'rock',
  Bug = 'bug',
  Ghost = 'ghost',
  Steel = 'steel',
  Fire = 'fire',
  Water = 'water',
  Grass = 'grass',
  Electric = 'electric',
  Psychic = 'psychic',
  Ice = 'ice',
  Dragon = 'dragon',
  Dark = 'dark',
  Fairy = 'fairy',
}

export enum PokemonTypeColor {
  Normal = '#9099A1',
  Fighting = '#CD4069',
  Flying = '#8FA8DD',
  Poison = '#AB6AC8',
  Ground = '#D97745',
  Rock = '#D97745',
  Bug = '#8FC12C',
  Ghost = '#5268AC',
  Steel = '#5268AC',
  Fire = '#FE9C54',
  Water = '#4C8FD5',
  Grass = '#63BB5B',
  Electric = '#F3D23B',
  Psychic = '#F97176',
  Ice = '#74CEC0',
  Dragon = '#0A6CC4',
  Dark = '#5A5366',
  Fairy = '#EC8EE6',
}

export const PokemonTypeColorMap = {
  normal: PokemonTypeColor.Normal,
  fighting: PokemonTypeColor.Fighting,
  flying: PokemonTypeColor.Flying,
  poison: PokemonTypeColor.Poison,
  ground: PokemonTypeColor.Ground,
  rock: PokemonTypeColor.Rock,
  bug: PokemonTypeColor.Bug,
  ghost: PokemonTypeColor.Ghost,
  steel: PokemonTypeColor.Steel,
  fire: PokemonTypeColor.Fire,
  water: PokemonTypeColor.Water,
  grass: PokemonTypeColor.Grass,
  electric: PokemonTypeColor.Electric,
  psychic: PokemonTypeColor.Psychic,
  ice: PokemonTypeColor.Ice,
  dragon: PokemonTypeColor.Dragon,
  dark: PokemonTypeColor.Dark,
  fairy: PokemonTypeColor.Fairy,
};

export interface Pokemon {
  generation: string;
  name: string;
  pokemonId: number;
  spriteUrl: string;
  types: string[];
}
