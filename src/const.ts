import logo from './assets/img/logo.svg';
import iiconAllQuests from './assets/img/icon-all-quests.svg';
import iconAdventures from './assets/img/icon-adventures.svg';
import iconHorrors from './assets/img/icon-horrors.svg';
import iconMystic from './assets/img/icon-mystic.svg';
import iconDetective from './assets/img/icon-detective.svg';
import iconScifi from './assets/img/icon-scifi.svg';

export const categories: { icon: string, name: string, type: string }[] = [
  { 'icon': iiconAllQuests, 'name': 'Все квесты', 'type': 'all' },
  { 'icon': iconAdventures, 'name': 'Приключения', 'type': 'adventures' },
  { 'icon': iconHorrors, 'name': 'Ужасы', 'type': 'horror' },
  { 'icon': iconMystic, 'name': 'Детектив', 'type': 'detective' },
  { 'icon': iconDetective, 'name': 'Мистика', 'type': 'mystic' },
  { 'icon': iconScifi, 'name': 'Sci-fi', 'type': 'sci-fi' },
];

export enum AppRoute {
  Root = '/',
  Quest = '/quest/:id',
  Сontacts = '/contacts',
  NotFound = '/not-found',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  Quests = 'QUESTS',
  Booking = 'BOOKING',
  Main = 'MAIN',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum APIRoute {
  Quest = '/quests',
  Quests = '/quests',
  Orders = '/orders1',
}

export const Message = {
  Problem: 'Что-то пошло не так. Перезагрузите страницу или попробуйте позже.',
  OrderSuccess: 'Ваша заявка отправлена. Мы с Вами свяжемся в ближайшее время.',
  OrderError: 'Данные не получены. Попробуйте позже.',
};


