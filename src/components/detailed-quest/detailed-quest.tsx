import { useState, useEffect } from 'react';
import { MainLayout } from '../common/common';
import { ReactComponent as IconClock } from '../../assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useAppSelector } from '../../hooks';
import { useParams } from 'react-router-dom';
import { renameLevel } from '../../utils';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const { id } = useParams();
  const quests = useAppSelector((state) => state.QUESTS.quests);
  if (!id) {
    return <div></div>;
  }
  const quest = (quests.filter((quest) => quest.id === +id))[0];

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={quest?.previewImg}
          alt={`квест ${quest?.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest?.title}</S.PageTitle>
            <S.PageSubtitle>{quest?.type}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{quest?.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{quest?.peopleCount[0]}–{quest?.peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{renameLevel(quest?.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest?.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseBtnClick={setIsBookingModalOpened} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
