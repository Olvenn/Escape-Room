import React from 'react';
import { Header, Footer } from '../../common/common';

type MainLayoutProps = {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
