import bulbasaur from '../../assets/sprites/bulbasaur.png';
import charmander from '../../assets/sprites/charmander.png';
import eevee from '../../assets/sprites/eevee.png';
import flareon from '../../assets/sprites/flareon.png';
import jolteon from '../../assets/sprites/jolteon.png';
import pikachu from '../../assets/sprites/pikachu.png';
import squirtle from '../../assets/sprites/squirtle.png';
import vaporeon from '../../assets/sprites/vaporeon.png';
import { PokemonDancingRow, WelcomeContainer } from '../../styled-components/styled-components';
import { PokemonSprite } from './PokemonSprite';

export const Welcome = () => (
  <WelcomeContainer>
    <PokemonDancingRow>
      <PokemonSprite pokemonUrl={pikachu} />
      <PokemonSprite pokemonUrl={bulbasaur} />
      <PokemonSprite pokemonUrl={charmander} />
      <PokemonSprite pokemonUrl={squirtle} />
    </PokemonDancingRow>
    <PokemonDancingRow>
      <PokemonSprite pokemonUrl={eevee} />
      <PokemonSprite pokemonUrl={vaporeon} />
      <PokemonSprite pokemonUrl={jolteon} />
      <PokemonSprite pokemonUrl={flareon} />
    </PokemonDancingRow>
  </WelcomeContainer>
);
