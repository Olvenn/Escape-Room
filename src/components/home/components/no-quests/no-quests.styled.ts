import styled, { css } from 'styled-components';

const Main = styled.main
  `background-image: radial-gradient(circle farthest-corner at center, #7d7f7d 0%, #000000  100%);
  color: white;
  background-color: black;
  font-size: 100px;
  width: 50vw;
  height: 300px;`
  ;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.medium};
  line-height: 120%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};
  padding: 0 120px;
  text-align: center
`;

const Wrap = styled.section
  `display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;`
  ;

export {
  Main,
  Title,
  Wrap,
};
