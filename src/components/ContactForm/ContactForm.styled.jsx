import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormContact = styled(Form)`
  margin-bottom: ${p => p.theme.spacing(15)};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.spacing(10)};
  color: ${p => p.theme.colors.title};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: ${p => p.theme.letterSpacings.caps};
`;

export const Input = styled(Field)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 100%;
  border: 1px solid ${p => p.theme.colors.title};
  border-radius: 4px;
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.l};

  :focus {
    outline-color: ${p => p.theme.colors.hover};
  }
`;

export const ErrorText = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: ${p => p.theme.letterSpacings.caps};
  color: ${p => p.theme.colors.error};
`;

export const Btn = styled.button`
  padding: 10px 20px;
  background-color: ${p => p.theme.colors.title};
  border-radius: 4px;
  border: none;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 20px rgba(107, 46, 6, 0.7);
  cursor: pointer;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: ${p => p.theme.letterSpacings.body};
  color: ${p => p.theme.colors.white};
  text-transform: uppercase;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hover};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: ${p => p.theme.colors.primary};
  }
`;
