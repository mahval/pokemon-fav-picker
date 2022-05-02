import styled from 'styled-components';
import { useAllPokemon } from '../../hooks/use-all-pokemon';
import { PokemonType } from '../../types/types';
import { PokemonImage } from './pokemon-image';

interface ChoiceBoxProps {
  type: PokemonType;
}

export const ChoiceBox = ({ type }: ChoiceBoxProps) => {
  const [bulbasaur] = useAllPokemon();

  return (
    <Box>
      <Banner>
        <BannerTag>
          <p>{type}</p>
        </BannerTag>
      </Banner>
      <Content>
        <IllustrationBox>
          <PokemonImage pokemon={bulbasaur} />
          <p>#{bulbasaur.pokemonId}</p>
          <p>{bulbasaur.name}</p>
        </IllustrationBox>
      </Content>
    </Box>
  );
};

const Box = styled.div`
  border-radius: 10px;
  max-width: 150px;
  box-shadow: 4px 4px 4px grey;
  background-color: green;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const IllustrationBox = styled.div`
  background-color: white;
  width: 90%;
  height: 90%;
  margin: 10px auto;
  text-align: center;
`;

const Banner = styled.div`
  padding: 10px;
  border-bottom: 1px solid black;
`;

const BannerTag = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
`;
