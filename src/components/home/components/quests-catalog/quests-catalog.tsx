import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../../../assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { categories } from '../../../../const';
import { useAppSelector } from '../../../../hooks';
import { renameLevel } from '../../../../utils';
import { store } from '../../../../store';
import { fetchQuestAction } from '../../../../store/api-actions';
import { useState } from 'react';
import NoQuests from '../no-quests/no-quests'

const QuestsCatalog = () => {
  const rawQuests = useAppSelector((state) => state.QUESTS.quests);
  const [type, setType] = useState('all');
  const handleTypeClick = (type: string) => setType(type);
  const quests = type === 'all' ? rawQuests : rawQuests.filter((quest) => quest.type === type);

  return (
    <>
      <S.Tabs>
        {categories.flatMap(
          (item) => {
            return (
              <S.TabItem key={item.name} onClick={() => handleTypeClick(item.type)} >
                <S.TabBtn isActive={type === item.type}>
                  <S.Image src={item.icon} alt="Логотип Escape Room" />
                  <S.TabTitle>{item.name}</S.TabTitle>
                </S.TabBtn>
              </S.TabItem>
            )
          }
        )}
      </S.Tabs>
      {!quests.length ? <NoQuests /> :
        <S.QuestsList>
          {quests.map(
            (quest) => {
              return (
                <S.QuestItem key={quest.id}>
                  <S.QuestItemLink onClick={() => {
                    store.dispatch(fetchQuestAction(quest.id));
                  }} to={`/quest/${quest.id} `} >
                    <S.Quest>
                      <S.QuestImage
                        src={quest.previewImg}
                        width="344"
                        height="232"
                        alt={`квест ${quest.title} `}
                      />
                      <S.QuestContent>
                        <S.QuestTitle>{quest.title}</S.QuestTitle>
                        <S.QuestFeatures>
                          <S.QuestFeatureItem>
                            <IconPerson />
                            {quest.peopleCount[0]}–{quest.peopleCount[1]} чел
                          </S.QuestFeatureItem>
                          <S.QuestFeatureItem>
                            <IconPuzzle />
                            {renameLevel(quest.level)}
                          </S.QuestFeatureItem>
                        </S.QuestFeatures>
                      </S.QuestContent>
                    </S.Quest>
                  </S.QuestItemLink>
                </S.QuestItem>
              )
            }
          )}
        </S.QuestsList>
      }
    </>
  )
};

export default QuestsCatalog;
