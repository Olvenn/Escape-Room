import {
  MainLayout,
  PageHeading
} from '../common/common';
import * as S from './under-construction.styled';

const UnderConstruction = (): JSX.Element => (

  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
      </PageHeading>
      <S.Title>Страница в разработке</S.Title>
      <S.PageText>В настоящее время эта страница находится в разработке. Мы скоро ее добавим на сайт. <br></br> Спасибо вам за терпение и понимание.</S.PageText>
      <S.Link to="/">
        <S.QuestBookingBtn>
          На главную
        </S.QuestBookingBtn>
      </S.Link>
    </S.Main>
  </MainLayout>
);

export default UnderConstruction;
