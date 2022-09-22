import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: ${p => p.theme.spacing(10)};
  color: ${p => p.theme.colors.title};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: ${p => p.theme.letterSpacings.body};
`;

export const Input = styled.input`
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
