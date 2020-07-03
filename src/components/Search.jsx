import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <div>
    <div className='hero'>
      <div className='container__search'>
        <input className='search' type='search' placeholder='Find your next roomie' />
        <h2>Un lugar para vivir momentos únicos</h2>
      </div>
    </div>
  </div>
);

export default Search;
