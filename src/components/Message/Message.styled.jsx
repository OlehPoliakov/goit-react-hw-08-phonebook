import styled from 'styled-components';

export const Paragraph = styled.p`
  text-align: center;
  padding-top: 20px;
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: ${p => p.theme.letterSpacings.caps};
`;
