import React from 'react';
import { Hero, SearchContainer, SearchItem, Title, SearchIconItem } from './styled';

const Search = () => {
  return (
    <div>
      <Hero>
        <SearchContainer>
          <SearchItem type='search' placeholder='Find your next roomie' />
          <SearchIconItem />
        </SearchContainer>
        <Title>Un lugar para vivir momentos únicos</Title>
      </Hero>
    </div>
  );
};
export default Search;
