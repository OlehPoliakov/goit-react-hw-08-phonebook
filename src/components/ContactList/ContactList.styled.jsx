import styled from 'styled-components';

export const List = styled.ul`
  display: block;
  margin-top: ${p => p.theme.spacing(15)};
  color: ${p => p.theme.colors.contacts};
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: ${p => p.theme.letterSpacings.body};
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.p``;

export const Number = styled.p``;

export const Delete = styled.button`
  margin-left: 15px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${p => p.theme.colors.error};
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;

  :hover {
    transform: scale(1.5);
  }
`;

export const Add = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${p => p.theme.colors.white};
  box-shadow: 0 0 4px rgba(107, 46, 6, 0.7);
  outline: none;
  margin-right: 15px;
`;

export const Wraper = styled.div`
  display: flex;
  align-items: center;
`;
