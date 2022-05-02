import styled from 'styled-components';
import { ChoiceBoxList } from './choice-box-list';

export const FavPickerAcrossGens = () => (
  <>
    <div>
      <Header>Your favourite Pokémon of each type</Header>
    </div>
    <section>
      <ChoiceBoxList />
    </section>
  </>
);

const Header = styled.h1`
  font-size: 1.5em;
`;
