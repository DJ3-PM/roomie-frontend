import React from 'react';
import Layout from '../../components/Layout';
import Wrapper from '../../components/Wrapper';
import { MainContent, Title, MsgError, BtnBackHome } from './styles';
import Astronaut from '../../components/Astronaut';

const NotFound = () => {
  return (
    <Layout>
      <Wrapper>
        <MainContent>
          <Title>404</Title>
          <Astronaut />
          <MsgError>
            Page Not Found
            <br />
            Sorry, nothing here
            <span role='img' aria-label='emoji corazon roto'>😖💔</span>
          </MsgError>
          <BtnBackHome to='/'>Back To Home</BtnBackHome>
        </MainContent>
      </Wrapper>
    </Layout>
  );
};

export default NotFound;
