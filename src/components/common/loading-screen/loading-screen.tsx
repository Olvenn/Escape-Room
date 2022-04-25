import * as S from './loading-screen.styled';

const LoadingScreen = (): JSX.Element => (

  <S.Main>
    <S.Loader>
      <S.InnerOne></S.InnerOne>
      <S.InnerTwo></S.InnerTwo>
      <S.InnerThree></S.InnerThree>
    </S.Loader>

  </S.Main>

);

export default LoadingScreen;


