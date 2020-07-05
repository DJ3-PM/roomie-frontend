import styled from 'styled-components';

export const Form = styled.form`
  @media screen and (max-width: 768px) {
    margin: 50px;
  }
`;

export const Services = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 30px 0 30px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ServicesTitle = styled.h2`
  grid-column: 1 / 6;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
  }
`;

export const ServicesLabel = styled.label`
  font-size: 14px;
  margin-right: 10px;
  padding: 10px 0;
`;

export const Description = styled.section`
  margin: 30px 0 30px;
`;

export const DescriptionTitle = styled.h3`
  margin-bottom: 25px;
`;

export const Zone = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const Select = styled.select`
  margin-right: 25px;
`;

export const Price = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 30px;
  border-radius: 10px;
  border: none;
  background: #f4f4f4;
  margin-bottom: 25px;
  padding: 15px;
`;

export const TextArea = styled.textarea`
  border-radius: 10px;
  border: none;
  background: #f4f4f4;
  width: 90%;
  margin-bottom: 25px;
  padding: 15px;
  height: 200px;
  resize: none;
`;

export const Button = styled.button`
    justify-self: start;
    background: #c3d233;
    outline: none;
    padding: 10px 20px;
    border: none;
    cursor: pointer;

    &:hover {
      font-weight: bold;
    }
`;
