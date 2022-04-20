import styled, { css } from 'styled-components';
import { Container, Link as RouterLink } from '../../common/common';

const Logo = styled.a`
  margin-right: 250px;

  @media (max-width: 1300px) {
    margin-right: auto;
  }
`;

const LogoLink = styled(RouterLink)`
  margin-right: 250px;

  @media (max-width: 1300px) {
    margin-right: auto;
  }
`;

const Image = styled.img``;

const Link = styled(RouterLink) <{ $isActiveLink?: boolean }>`
  display: block;
  max-width: 100px;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.whiteSmoke};

  ${({ $isActiveLink }) =>
    $isActiveLink &&
    css`
      color: ${({ theme }) => theme.color.tangerine};
    `}

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

export {
  Logo,
  Image,
  LogoLink,
  Link,
};
