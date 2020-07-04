import styled from 'styled-components';

export const Form = styled.form`
  margin: 100px 0;
  background: #F5F6F7;
  padding: 50px;
`;

export const FormConstrainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Input = styled.input`
  margin: 10px 0;
  border: 0;
  padding: 20px 15px;

  &:focus {
    outline: 1px solid #BACD25;

  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  margin: 10px 0;
  background: #BACD25;
  border: none;
  cursor: pointer;
  padding: 12px 24px;
`;
