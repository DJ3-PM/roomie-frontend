import React from 'react';
import Layout from '../Layout';
import Wrapper from '../Wrapper';
import { MainContent, Title, MsgError, BtnBackHome, Image404 } from './styles';
import astronauta from '../../assets/static/astronauta.svg';

const NotFound = () => {
  return (
    <Layout>
      <Wrapper>
        <MainContent>
          <Title>404</Title>
          <Image404 src={astronauta} />
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
