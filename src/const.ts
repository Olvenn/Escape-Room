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

export enum TypeInEnglish {
  Hard = 'hard',
  Medium = 'medium',
  Easy = 'easy',
}

export enum TypeInRussin {
  Hard = 'трудный',
  Medium = 'средний',
  Easy = 'легкий',
}

export enum AppRoute {
  Root = '/',
  Quest = '/quest/:id',
  Сontacts = '/contacts',
  NotFound = '/not-found',
  ForBeginners = '/for-beginners',
  Reviews = '/reviews',
  Stocks = '/stocks',
}

export enum NameSpace {
  Quests = 'QUESTS',
  Booking = 'BOOKING',
  Main = 'MAIN',
}

export enum APIRoute {
  Quests = '/quests',
  Orders = '/orders',
}

export const Message = {
  Problem: 'Что-то пошло не так. Перезагрузите страницу или попробуйте позже.',
  OrderSuccess: 'Ваша заявка отправлена. Мы с Вами свяжемся в ближайшее время.',
  OrderError: 'Данные не получены. Возможно сервер не отвечает. Попробуйте позже.',
} as const;


