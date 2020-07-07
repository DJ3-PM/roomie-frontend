import styled from 'styled-components';

export const CheckboxArranger = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, auto);
  /* box-shadow: inset 0 2px 4px 0 rgba(0,0,0,.15); */
  padding: 10px 5px;
  border-radius: 5px;
`;

export const SectionTitle = styled.h2`
  margin-top: 40px;
  border-bottom: 1px solid var(--accent-color);
  padding-bottom: 10px;
`;
