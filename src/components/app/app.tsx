import { ThemeProvider } from 'styled-components';
import { Routes, Route, BrowserRouter } from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import NotFoundPage from '../not-found-page/not-found-page';
import { AppRoute } from '../../const';

import { appTheme } from './common';
import * as S from './app.styled';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
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
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </ThemeProvider>
);

export default App;
