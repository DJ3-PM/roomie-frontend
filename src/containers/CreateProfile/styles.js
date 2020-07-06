import styled from 'styled-components';

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 10px auto;
`;

export const TextArea = styled.textarea`
  resize: none;
  font-family: inherit;
  border: none;
`;

export const InputFile = styled.input`
  width: 100%;
  border-radius: 5px;
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .15);
  font-size: 14px;
  padding: .8em 1em;
  box-sizing: border-box;
  margin-bottom: 1em;
  outline: 0;
`;

export const Label = styled.label`
  margin-top: 15px
`;
