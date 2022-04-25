import * as S from './no-quests.styled';
import { useAppSelector } from '../../../../hooks';
import { getError, getIsDataLoadedSuccess } from '../../../../store/reducers/selectors';

const NoQuests = (): JSX.Element => {
  const isDataLoaded = useAppSelector(getIsDataLoadedSuccess);
  const errorDataLoaded = useAppSelector(getError);

  return (
    <S.Main>
      <S.Wrap>
        {!isDataLoaded ?
          <S.Title>{errorDataLoaded}</S.Title> :
          <S.Title>К сожалению, на данный момент у нас нет квестов на эту тематику. <br></br> Мы уже готовим новые предложения для Вас.</S.Title>}
      </S.Wrap>
    </S.Main>
  );
};

export default NoQuests;
