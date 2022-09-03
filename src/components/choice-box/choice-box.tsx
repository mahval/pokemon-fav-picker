import styled from 'styled-components';
import { usePokemonById } from '../../hooks/use-pokemon-by-id';
import { PokemonType, PokemonTypeColor } from '../../types/types';
import { getTypeColor } from '../../utils/get-type-color';
import { capitalize } from '../../utils/text-utils';
import { PokemonImage } from '../common/pokemon-image';

interface ChoiceBoxProps {
  type: PokemonType;
}

export const ChoiceBox = ({ type }: ChoiceBoxProps) => {
  const chosen = usePokemonById(200);

  if (chosen === null) {
    return null;
  }

  const color: PokemonTypeColor = getTypeColor(type);

  return (
    <Box color={color}>
      <Banner>
        <BannerTag>
          <p>{type}</p>
        </BannerTag>
      </Banner>
      <a href={`/pick/${type}`} rel="noreferrer">
        <Content>
          <IllustrationBox>
            <PokemonImage pokemon={chosen} />
            <p>{`#${chosen.pokemonId}`}</p>
            <p>{capitalize(chosen.name)}</p>
          </IllustrationBox>
        </Content>
      </a>
    </Box>
  );
};

interface BoxProps {
  color: string;
}

const Box = styled.div<BoxProps>`
  border-radius: 10px;
  width: 200px;
  height: 250px;
  box-shadow: 4px 4px 4px grey;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const IllustrationBox = styled.div`
  background-color: none;
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
  border-radius: 20px;
  box-shadow: 1px 1px 1px grey;
  padding: 10px;
  background-color: #fff;
`;
