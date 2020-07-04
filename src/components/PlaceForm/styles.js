import styled from 'styled-components';

export const Services = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 30px 0 30px;
`;

export const ServicesTitle = styled.h2`
  grid-column: 1 / 6;
  margin-bottom: 25px;
`;

export const ServicesLabel = styled.label`
  font-size: 14px;
  margin-right: 10px;
  padding: 10px;
`;

export const Description = styled.section`
  margin: 30px 0 30px;
`;

export const DescriptionTitle = styled.h3`
  margin-bottom: 25px;
  text-align: center;
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
  height: 50px;
  border: none;
  background: #f4f4f4;
  margin-bottom: 25px;
  padding: 15px;
`;

export const TextArea = styled.textarea`
  border: none;
  background: #f4f4f4;
  margin-bottom: 25px;
  padding: 15px;
  height: 200px;
  resize: none;
  width: 100%;
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
