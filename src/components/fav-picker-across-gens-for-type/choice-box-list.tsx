import styled from 'styled-components';
import { useTypes } from '../../hooks/use-types';
import { ChoiceBox } from '../choice-box/choice-box';

export const ChoiceBoxList = () => {
  const types = useTypes();

  return (
    <ChoiceBoxListStyled>
      {types.map((type) => (
        <ChoiceBox key={type} type={type} />
      ))}
    </ChoiceBoxListStyled>
  );
};

const ChoiceBoxListStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
