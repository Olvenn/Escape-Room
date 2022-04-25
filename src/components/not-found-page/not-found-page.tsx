import * as S from './not-found-page.styled';
import logo from '../../assets/img/logo.svg';

const NotFoundPage = (): JSX.Element => (

  <S.Main>
    <S.Wrap>
      <S.Title>404. Page not found</S.Title>
      <S.Link to="/">
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Link>
      <S.Link to="/">
        <S.Title>Back to main page</S.Title>
      </S.Link>
    </S.Wrap>
  </S.Main>

);

export default NotFoundPage;
