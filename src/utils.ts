import { categories } from './const';

export const renameLevel = (type: string) => {
  switch (type) {
    case 'hard':
      return 'трудный';
    case 'medium':
      return 'средний';
    case 'easy':
      return 'легкий';
  }
};

export const renameGenre = (incomingGenre: string): string => {
  let genre = incomingGenre.toLowerCase();

  categories.forEach((item) => {
    if (incomingGenre && item.type.toLowerCase() === incomingGenre.toLowerCase()) {
      genre = item.name;
    }
  })
  return genre.toLowerCase();
}
