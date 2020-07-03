import React from 'react';
import '../assets/styles/components/PlaceItem.scss';

const PlaceItem = () => (
  <article>
    <span className='like'>Heart</span>
    <img src='img/room.jpg' alt='Roomie' />
    <h2>Santa Marta</h2>
    <p>
      Rodadero
      <span>$10.000</span>
    </p>

  </article>
);

export default PlaceItem;
