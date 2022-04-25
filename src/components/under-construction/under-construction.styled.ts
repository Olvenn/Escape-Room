import styled from 'styled-components';
import { Link as RouterLink } from '../common/common';
import { Container } from '../common/common';
import { Button } from '../common/common';

const Main = styled(Container)`
  max-width: 1080px;
  margin-top: 120px;
  margin-bottom: 120px;

  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    max-width: initial;
    padding-left: 32px;
    padding-right: 33px;
  }

  &:after {
    content: '';
    z-index: 4;
    position: fixed;
    display: block;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 80px;

    background: linear-gradient(180deg, rgba(19, 18, 18, 0) 0%, #131212 100%);
    opacity: 0.8;
    pointer-events: none;
  }
`;

const PageText = styled.h1`
  margin-left: 9px;
  font-size: ${({ theme }) => theme.font.medium};
  line-height: 144%;
  font-weight: 400;
  color: ${({ theme }) => theme.color.whisper2};
`;


const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.formsHeading};
  line-height: 120%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.white};
  margin-top: 100px;
  mardin-bottom: 50px;
`;

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  height: 100vh;
`;

const Image = styled.img`
  text-alin: center`;

const Text = styled.div`
  font-size: 50px
  margin-top: 50px
`;

const Link = styled(RouterLink)`
  @media (max-width: 1300px) {
    margin-right: auto;
  }
`;

const QuestBookingBtn = styled(Button).attrs({ type: 'button' })`
  margin-left: 2px;
  margin-top: 50px
`;

export {
  Main,
  Title,
  Wrap,
  Image,
  Text,
  Link,
  PageText,
  QuestBookingBtn
};


