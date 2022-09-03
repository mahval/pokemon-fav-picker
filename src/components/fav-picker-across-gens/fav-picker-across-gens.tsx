import styled from 'styled-components';
import { ChoiceBoxList } from './choice-box-list';

export const FavPickerAcrossGens = () => (
  <>
    <div>
      <Header>Your favourite Pokémon of each type</Header>
    </div>
    <ChoiceBoxListSectionStyled>
      <ChoiceBoxList />
    </ChoiceBoxListSectionStyled>
  </>
);

const Header = styled.h1`
  font-size: 1.5em;
`;

const ChoiceBoxListSectionStyled = styled.section`
  margin-top: 3rem;
  text-align: center;
`;
