import React from 'react';
import { Hero, SearchContainer, SearchItem, Title } from './styled';

const Search = () => {
  return (
    <div>
      <Hero>
        <SearchContainer>
          <SearchItem type='search' placeholder='Find your next roomie' />
          <Title>Un lugar para vivir momentos únicos</Title>
        </SearchContainer>
      </Hero>
    </div>
  );
};
export default Search;
