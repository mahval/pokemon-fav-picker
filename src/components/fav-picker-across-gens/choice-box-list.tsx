import styled from 'styled-components';
import { useTypes } from '../../hooks/use-types';
import { ChoiceBox } from '../choice-box/choice-box';

export const ChoiceBoxList = () => {
  const types = useTypes();

  return (
    <ChoiceBoxListStyled>
      {types.map((type) => (
        <ChoiceBoxStyled key={type}>
          <ChoiceBox type={type} />
        </ChoiceBoxStyled>
      ))}
    </ChoiceBoxListStyled>
  );
};

const ChoiceBoxListStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ChoiceBoxStyled = styled.div`
  margin: 0 1rem 1rem 0;
  &:of-last-type {
    margin-right: 0;
  }
`;
