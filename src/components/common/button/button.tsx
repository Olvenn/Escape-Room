import React from 'react';
import * as S from './button.styled';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, ...props }: ButtonProps): JSX.Element => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
