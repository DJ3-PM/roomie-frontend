/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types'
import { SearchContainer, SearchItem, Title, SearchIconItem } from './styles';

const Search = ({ onChange }) => {
  return (
    <>
      <SearchContainer>
        <SearchItem onChange={onChange} type='search' placeholder='Find your next roomie' />
        <SearchIconItem />
      </SearchContainer>
      <Title>The best places in Medellín <br/> to live unique moments</Title>
    </>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
}
export default Search;
