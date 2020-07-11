import React from 'react';
import { SearchContainer, SearchItem, MainTitle, Title, SearchIconItem } from './styles';

const Search = ({ onChange }) => {
  return (
    <>
      <SearchContainer>
        <SearchItem onChange={onChange} type='search' placeholder='Find your next roomie' />
        <SearchIconItem />
      </SearchContainer>
      <Title>Los mejores lugares de Medellín <br/> para vivir momentos únicos</Title>
    </>
  );
};
export default Search;
