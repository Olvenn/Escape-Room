import styled, { css } from 'styled-components';
import { Link as RouterLink } from '../common/common';

const Main = styled.main
  `background-image: radial-gradient(circle farthest-corner at center, #3C4B57 0%, #1C262B 100%);
  color: white;
  background-color: black;
  font-size: 100px;
  width: 100vw;
  height: 500vh`
  ;

  const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.formsHeading};
  line-height: 120%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};
`;

  const Wrap = styled.section
  `display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  height: 100vh;`
  ;

  const Image = styled.img`
  text-alin: center`;

  const Text = styled.div
  `font-size: 50px
  margin-top: 50px`;

  const Link = styled(RouterLink)`
  @media (max-width: 1300px) {
    margin-right: auto;
  }
`;

  export {
    Main,
    Title,
    Wrap,
    Image,
    Text,
    Link,
  };


