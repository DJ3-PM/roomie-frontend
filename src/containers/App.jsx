import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Place from '../components/Place';
import PlaceItem from '../components/PlaceItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories title='Encuentra el lugar perfecto'>
      <Place>
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
        <PlaceItem />
      </Place>
    </Categories>

    <Footer />
  </div>
);

export default App;
