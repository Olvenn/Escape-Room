import React from 'react';
import * as S from './page-heading.styled';

type PageHeadingProps = {
  children: React.ReactNode;
}

const PageHeading = ({ children, ...props }: PageHeadingProps) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
