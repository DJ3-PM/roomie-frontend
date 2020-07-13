import styled from 'styled-components';

export const Form = styled.form`
  margin: 100px 1rem;
  background: #F5F6F7;
  padding: 50px;
  border-radius: 10px;
  background: linear-gradient(137deg, rgba(238,255,94,1) 0%, rgba(133,156,0,1) 100%);
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  height: max-content;
  max-width: 65%;
  
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FormConstrainer = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  opacity: .7;
  margin-bottom: 5px;
`;
