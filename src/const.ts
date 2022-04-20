import logo from './assets/img/logo.svg';
import iiconAllQuests from './assets/img/icon-all-quests.svg';
import iconAdventures from './assets/img/icon-adventures.svg';
import iconHorrors from './assets/img/icon-horrors.svg';
import iconMystic from './assets/img/icon-mystic.svg';
import iconDetective from './assets/img/icon-detective.svg';
import iconScifi from './assets/img/icon-scifi.svg';

export const ratings: { icon: string, name: string }[] = [
  { 'icon': iiconAllQuests, 'name': 'Все квесты' },
  { 'icon': iconAdventures, 'name': 'Приключения' },
  { 'icon': iconHorrors, 'name': 'Ужасы' },
  { 'icon': iconMystic, 'name': 'Детектив' },
  { 'icon': iconDetective, 'name': 'Мистика' },
  { 'icon': iconScifi, 'name': 'Sci-fi' },
];

// export const Categories: { [index: string]: string } = {
//   IconAllQuests: 'Все квесты',
//   IconAdventures: 'Приключения',
//   IconHorrors: 'Ужасы',
//   IconDetective: 'Детектив',
//   IconMystic: 'Мистика',
//   IconScifi: 'Sci-fi',
// }

export enum AppRoute {
  Root = '/',
  Quest = '/quest',
  Сontacts = '/contacts',
  NotFound = '/not-found',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  Offers = 'OFFERS',
  User = 'USER',
  Main = 'MAIN',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Offer = '/quests/',
  Offers = '/quests',
}


export const cities: { [index: string]: string } = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf',
};



