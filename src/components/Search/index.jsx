/* eslint-disable */
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { SearchContainer, SearchItem, Title, SearchIconItem } from './styles';

const Search = ({ onChange }) => {
  return (
    <>
      <SearchContainer>
        <SearchItem onChange={onChange} type='search' placeholder='Find your next roomie' />
        <SearchIconItem>
          <BsSearch />
        </SearchIconItem>
      </SearchContainer>
      <Title>The best places in Medellín <br/> to live unique moments</Title>
    </>
  );
};

export default Search;
