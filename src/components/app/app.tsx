import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route, BrowserRouter } from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';

import { appTheme } from './common';
import * as S from './app.styled';

export const AppRoute = {
  Root: '/',
  Quest: '/quest',
  Сontacts: '/contacts',
  NotFound: '/not-found',
};

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <Home />
          }
        />
        <Route
          path={AppRoute.Quest}
          element={
            <DetailedQuest />
          }
        />
        <Route path={AppRoute.Сontacts}
          element={<Contacts />}
        />
        {/* <Route
        path="*"
        element={<NotFoundPage />}
      /> */}
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
