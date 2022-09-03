import styled from 'styled-components';
import { PokemonType } from '../../types/types';

interface FavPickerAcrossGensForTypeProps {
  type: PokemonType;
}

export const FavPickerAcrossGensForType = ({ type }: FavPickerAcrossGensForTypeProps) => (
  <>
    <div>
      <Header>{type}</Header>
    </div>
  </>
);

const Header = styled.h1`
  font-size: 1.5em;
`;
