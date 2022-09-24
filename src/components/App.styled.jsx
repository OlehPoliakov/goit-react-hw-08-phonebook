import styled from 'styled-components';

export const Container = styled.div`
  min-width: 375px;
  max-width: 425px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background: rgb(119, 63, 251);
  background: rgb(34, 193, 195);
  background: rgb(253, 187, 45);
  background: rgb(253, 187, 45);
  background: linear-gradient(
    0deg,
    rgba(253, 187, 45, 1) 25%,
    rgba(34, 193, 195, 0.7987570028011204) 75%
  );
  padding: ${props => props.theme.spacing(10)};
  box-shadow: 0 0 20px rgba(107, 46, 6, 0.7);
  border-radius: 10px;
  :hover,
  :focus {
    filter: saturate(125%);
  }
`;
