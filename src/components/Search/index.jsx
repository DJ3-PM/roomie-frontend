import React from 'react';
import { SearchContainer, SearchItem, MainTitle, Title, SearchIconItem } from './styles';

const Search = ({ onChange }) => {
  return (
    <>
      <MainTitle>Los mejores lugares de Medellín</MainTitle>
      <SearchContainer>
        <SearchItem onChange={onChange} type='search' placeholder='Find your next roomie' />
        <SearchIconItem />
      </SearchContainer>
      <Title>Un lugar para vivir momentos únicos</Title>
    </>
  );
};
export default Search;
