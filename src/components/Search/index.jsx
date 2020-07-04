import React from 'react';
import { Hero, SearchContainer, SearchItem } from './styled';

const Search = () => {
  return (
    <div>
      <Hero>
        <SearchContainer>
          <SearchItem type='search' placeholder='Find your next roomie' />
          <h2>Un lugar para vivir momentos únicos</h2>
        </SearchContainer>
      </Hero>
    </div>
  );
};
export default Search;
