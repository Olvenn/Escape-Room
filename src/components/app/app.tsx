import { ThemeProvider } from 'styled-components';
import { Routes, Route, BrowserRouter } from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import NotFoundPage from '../not-found-page/not-found-page';
import { AppRoute } from '../../const';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from '../../hooks';
import {getIsDataLoaded } from '../../store/reducers/selectors';
import { appTheme } from './common';
import * as S from './app.styled';
import LoadingScreen from '../common/loading-screen/loading-screen';

const App = () => {
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
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </ThemeProvider>
)};

export default App;
