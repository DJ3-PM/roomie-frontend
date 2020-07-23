import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Context';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Gallery from '../../components/Gallery';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputCheck from '../../components/InputCheck';
import InputSelect from '../../components/InputSelect';
import InputFile from '../../components/InputFile';
import TextArea from '../../components/TextArea';
import FormButton from '../../components/FormButton';
import transformFilesToURLs from '../../utils/transformFilesToURLs';

import { SectionTitle, CheckboxArranger } from './styles';

const CreatePlace = ({ history }) => {
  const { profileId } = useContext(Context);

  const [form, setForm] = useState({
    profileId,
  });
  const [imageList, setImageList] = useState([]);
  const [mainImage, setMainImage] = useState([]);
  const [zones, setZones] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);

  // TODO:
  // Este tipo de effects deberían estar como custom hooks, de esta manera
  // puede re usar esta función de obtener las locations en otro componente a futuro


  // No es buena práctica tener la url del backend directamente en los components/containers ya que si en
  // algún momento llega a cambiar debe ir método por método cambiando la URL.
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data } = await axios.get('https://peaceful-bastion-02967.herokuapp.com/api/locations');
        const zonesArray = data.data;
        setZones(zonesArray);
      } catch (error) {
        alert(error);
      }
    };

    fetchLocations();
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const myDataForm = new FormData();

    Object.keys(form).forEach((entry) => {
      if (entry === 'images') {
        for (let i = 0; i < form.images.length; i++) {
          myDataForm.append('images', form.images[i]);
        }

      } else {

        myDataForm.append(`${entry}`, form[entry]);
      }
    });

    // TODO:

    // No es buena práctica tener la url del backend directamente en los components/containers ya que si en
    // algún momento llega a cambiar debe ir método por método cambiando la URL.

    // No se esta usando la variable {data}

    const sendDataForm = async () => {
      try {
        const { data } = await axios.post('https://peaceful-bastion-02967.herokuapp.com/api/places', myDataForm, {});
        history.push('/');
      } catch (error) {
        const { message } = error.response.data;
        if (message === 'An internal server error occurred') {
          alert('Missing Data!');
        } else {
          alert('something went wrong...');
        }
      }

    };

    sendDataForm();
  };

  const handleCheckInput = (event) => {
    const { target } = event;
    setForm({
      ...form,
      [target.name]: target.checked,
    });
  };

  const handleTextInput = (event) => {
    const { target } = event;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleFileInput = (event) => {
    const { target } = event;

    setForm({
      ...form,
      [target.name]: target.files,
    });

    const imagesArray = transformFilesToURLs(target);
    setImageList(imagesArray);
  };

  const handleSingleFileInput = (event) => {
    const { target } = event;

    setForm({
      ...form,
      [target.name]: target.files[0],
    });

    const image = URL.createObjectURL(target.files[0]);
    setMainImage([image]);
  };

  const handleFirstSelectInput = (event) => {
    const { target } = event;

    setForm({
      ...form,
      location: target.value,
    });

    // TODO:

    // No es buena practica tener la url del backend directamente en el código ya que si en
    // algún momento llega a cambiar debe ir método por método cambiando la URL.

    const fetchNeighborhoods = async (zone = '') => {
      const zoneName = zone.split(' ').join('');
      try {
        const { data } = await axios.get(`https://peaceful-bastion-02967.herokuapp.com/api/locations/${zoneName}`);
        const neighborhoodsArray = data.data;
        setNeighborhoods(neighborhoodsArray);
      } catch (error) {
        alert(error);
      }
    };

    fetchNeighborhoods(target.value);

  };

  // TODO:

  // No es buena práctica ir directamente a un array[0] antes verificar si esto
  // existe hacer .split(',')[0] puede causar errores mejorar verificar que
  // form.location no es undefined o null antes de hacer la operación


  const handleSecondSelectInput = (event) => {
    const { target } = event;
    setForm({
      ...form,
      location: `${form.location.split(',')[0]}, ${target.value}`,
    });
  };

  // TODO:

  // En el template esta mal escrito la palabra `caracteristics`

  return (
    <Layout>
      <Wrapper>
        <Form title='Create a Place' onSubmit={handleOnSubmit}>
          <SectionTitle>Let's get started</SectionTitle>
          <Input name='name' onChange={handleTextInput} text='The name of your place' />
          <SectionTitle>Add the main picture of your place</SectionTitle>
          <Gallery imagesList={mainImage} />
          <InputFile name='mainImage' onChange={handleSingleFileInput} text='Upload your main image' />
          <SectionTitle>Add some extra pictures</SectionTitle>
          <Gallery imagesList={imageList} />
          <InputFile name='images' onChange={handleFileInput} text='Upload pictures of your room' multiple />
          <SectionTitle>Where's your place located?</SectionTitle>
          <InputSelect name='zone' optionsArray={zones} onChange={handleFirstSelectInput} />
          {
            neighborhoods.length > 0 && (
              <InputSelect name='neighborhood' optionsArray={neighborhoods} onChange={handleSecondSelectInput} />
            )
          }
          <SectionTitle>What caracteristics does your place has?</SectionTitle>
          <CheckboxArranger>
            <InputCheck name='bath' text='Private Bathroom' onClick={handleCheckInput} />
            <InputCheck name='wifi' text='Wi-Fi' onClick={handleCheckInput} />
            <InputCheck name='parking' text='Parking' onClick={handleCheckInput} />
            <InputCheck name='tv' text='TV' onClick={handleCheckInput} />
            <InputCheck name='cleaning' text='Cleaning Service' onClick={handleCheckInput} />
            <InputCheck name='closet' text='Closet' onClick={handleCheckInput} />
          </CheckboxArranger>
          <SectionTitle>Tell us more about your place</SectionTitle>
          <Input name='furniture' onChange={handleTextInput} type='text' />
          <Input name='price' onChange={handleTextInput} type='number' />
          <Input name='size' onChange={handleTextInput} type='number' />
          <TextArea name='description' onChange={handleTextInput} text='Tell us more about your room!' />
          <FormButton text='Done' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default CreatePlace;
