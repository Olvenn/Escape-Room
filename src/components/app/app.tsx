import { ThemeProvider } from 'styled-components';
import { Routes, Route } from '../common/common';
import DetailedQuest from '../detailed-quest-page/detailed-quest/detailed-quest';
import Contacts from '../contacts-page/contacts/contacts';
import Home from '../home-page/home/home';
import NotFoundPage from '../not-found-page/not-found-page';
import { AppRoute } from '../../const';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from '../../hooks';
import { getIsDataLoaded } from '../../store/reducers/selectors';
import { appTheme } from './common';
import * as S from './app.styled';
import LoadingScreen from '../common/loading-screen/loading-screen';
import UnderConstruction from '../under-construction/under-construction';

const App = (): JSX.Element => {
  const isLoading = useAppSelector(getIsDataLoaded);

  if (!isLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (

    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <ToastContainer />
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
          path={AppRoute.ForBeginners}
          element={
            <UnderConstruction />
          }
        />
        <Route
          path={AppRoute.Reviews}
          element={
            <UnderConstruction />
          }
        />
        <Route
          path={AppRoute.Stocks}
          element={
            <UnderConstruction />
          }
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
