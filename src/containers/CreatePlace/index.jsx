/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import Gallery from '../../components/Gallery';
import PlaceForm from '../../components/PlaceForm';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputCheck from '../../components/InputCheck';
import InputSelect from '../../components/InputSelect';
import InputFile from '../../components/InputFile';
import TextArea from '../../components/TextArea';
import FormButton from '../../components/FormButton';

// TEST profileID: 5f0264cafb88f00456d317df
const transformFilesToURLs = ({ files }) => {
  const auxArray = [];
  Object.keys(files).forEach((entry) => {
    auxArray.push(URL.createObjectURL(files[entry]));
  });
  return auxArray;
};

const CreatePlace = () => {
  const [form, setForm] = useState({});
  const [imageList, setImageList] = useState([]);
  const [zones, setZones] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data } = await axios.get('https://peaceful-bastion-02967.herokuapp.com/api/locations');
        const zonesArray = data.data;
        console.log(zonesArray);
        setZones(zonesArray);
      } catch (error) {
        alert(error);
      }
    };

    fetchLocations();
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('submiting...');
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

    debugger;
    const sendDataForm = async () => {
      try {
        const { data } = await axios.post('https://peaceful-bastion-02967.herokuapp.com/api/places', myDataForm, {});
        // const { data } = await axios.post('http://localhost:8000/api/places', myDataForm, {});
        alert(data.message);
      } catch (error) {
        const { message } = error.response.data;
        alert(message);
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

    // const image = URL.createObjectURL(target.files[0]);
    // setProfileImage(image);
  };

  const handleFirstSelectInput = (event) => {
    const { target } = event;

    setForm({
      ...form,
      location: target.value,
    });

    console.log(target.value);

    const fetchNeighborhoods = async (zone = '') => {
      const zoneName = zone.split(' ').join('');
      try {
        const { data } = await axios.get(`https://peaceful-bastion-02967.herokuapp.com/api/locations/${zoneName}`);
        const neighborhoodsArray = data.data;
        console.log(neighborhoodsArray);
        setNeighborhoods(neighborhoodsArray);
      } catch (error) {
        alert(error);
      }
    };

    fetchNeighborhoods(target.value);

  };

  const handleSecondSelectInput = (event) => {
    const { target } = event;
    setForm({
      ...form,
      location: `${form.location}, ${target.value}`,
    });
  };

  console.log(form);
  return (
    <Layout>
      <Wrapper>
        <Form title='Create a Place' onSubmit={handleOnSubmit}>
          <Input name='name' onChange={handleTextInput} text='The name of your place' />
          <InputFile name='mainImage' onChange={handleSingleFileInput} text='Upload your main image' />
          <Gallery imagesList={imageList} />
          <InputFile name='images' onChange={handleFileInput} text='Upload pictures of your room' multiple />
          <InputSelect name='zone' optionsArray={zones} onChange={handleFirstSelectInput} />
          {
            neighborhoods.length > 0 && (
              <InputSelect name='neighborhood' optionsArray={neighborhoods} onChange={handleSecondSelectInput} />
            )
          }
          <InputCheck name='wifi' text='Wi-Fi' onClick={handleCheckInput} />
          <InputCheck name='parking' text='Parking' onClick={handleCheckInput} />
          <InputCheck name='cleaning' text='Cleaning Service' onClick={handleCheckInput} />
          <InputCheck name='tv' text='TV' onClick={handleCheckInput} />
          <InputCheck name='bath' text='Private Bathroom' onClick={handleCheckInput} />
          <InputCheck name='closet' text='Closet' onClick={handleCheckInput} />
          <Input name='furniture' onChange={handleTextInput} type='text' />
          <Input name='price' onChange={handleTextInput} type='number' />
          <Input name='size' onChange={handleTextInput} type='number' />
          <TextArea name='description' onChange={handleTextInput} text='Tell us more about your room!' />
          <Input name='profileId' onChange={handleTextInput} placeholder='PROFILE ID (TEST)' />
          <FormButton text='Done' />
        </Form>
      </Wrapper>
    </Layout>
  );
};

export default CreatePlace;
