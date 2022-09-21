import styled from 'styled-components';
import { Form, Field } from 'formik';

// export const Form = styled(Form)``;

export const FormContact = styled(Form)`
  margin-bottom: 50px;
`;

export const Input = styled(Field)`
  height: 40px;
  padding: 0 10px 0 10px;

  border: 1px solid black;
  outline: none;

  color: grey;
  font-size: 14px;

  :focus {
    border-color: red;
  }

  ::placeholder {
    font-size: 42px;
    color: green;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  color: red;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 40px;

  background-color: green;
  color: tomato;
  font-family: inherit;
  border: none;

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  :hover,
  :focus {
    background-color: red;
  }
`;
