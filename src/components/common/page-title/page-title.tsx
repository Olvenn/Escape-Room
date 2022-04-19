import React from 'react';
import * as S from './page-title.styled';

type PageTitleProps = {
  children: React.ReactNode;
}

const PageTitle = ({ children, ...props }: PageTitleProps) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
