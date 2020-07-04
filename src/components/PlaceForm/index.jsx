// ! OPTIMIZE
// TODO: DIVIDE INTO MORE COMPONENTS
import React from 'react';

import { Services, ServicesTitle, ServicesLabel, Description, DescriptionTitle, Zone, Select, Price, Input, TextArea, Button } from './styles';

const PlaceForm = () => {
  return (
    <form>
      <Services>
        <ServicesTitle>EL ROOMIE INCLUYE ESTOS SERVICIOS</ServicesTitle>
        <ServicesLabel htmlFor='wifi'>
          <input type='checkbox' name='wifi' />
          {' '}
          WIFI
        </ServicesLabel>
        <ServicesLabel htmlFor='bath'>
          <input type='checkbox' name='bath' />
          {' '}
          BAÑO PRIVADO
        </ServicesLabel>
        <ServicesLabel htmlFor='parking'>
          <input type='checkbox' name='parking' />
          {' '}
          PARQUEADERO
        </ServicesLabel>
        <ServicesLabel htmlFor='tv'>
          <input type='checkbox' name='tv' />
          {' '}
          TV
        </ServicesLabel>
        <ServicesLabel htmlFor='cleaning'>
          <input type='checkbox' name='cleaning' />
          {' '}
          LIMPIEZA
        </ServicesLabel>
        <ServicesLabel htmlFor='closet'>
          <input type='checkbox' name='closet' />
          {' '}
          CLOSET
        </ServicesLabel>
      </Services>

      <Description>
        <DescriptionTitle>SELECCIONAR ZONA Y BARRIO</DescriptionTitle>
        <Zone>
          <Select name='zone'>
            <option value='zone1'>Zone 1</option>
            <option value='zone2'>Zone 2</option>
            <option value='zone3'>Zone 3</option>
          </Select>
          <Select name='neighborhood'>
            <option value='neighborhood1'>Neighborhood 1</option>
            <option value='neighborhood2'>Neighborhood 2</option>
            <option value='neighborhood3'>Neighborhood 3</option>
          </Select>
        </Zone>
        <h2>RANGO DE PRECIO</h2>
        <Price>
          <Input type='number' />
          <span> - </span>
          <Input type='number' />
        </Price>
        <h3>INGRESAR DESCRIPCIÓN DEL ROOMIE</h3>
        <TextArea />
        <h3>INGRESAR DESCRIPCIÓN DEL ESPACIO</h3>
        <TextArea />
        <h3>ACCESO DE LOS HUÉSPEDES</h3>
        <TextArea />

        <Button type='submit'>
          Publicar
        </Button>
      </Description>
    </form>
  );
};

export default PlaceForm;
