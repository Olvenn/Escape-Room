import { categories, TypeInEnglish, TypeInRussin } from './const';

export const renameLevel = (type: string) => {
  switch (type) {
    case TypeInEnglish.Hard:
      return TypeInRussin.Hard;
    case TypeInEnglish.Medium:
      return TypeInRussin.Medium;
    case TypeInEnglish.Easy:
      return TypeInRussin.Easy;
  }
};

export const renameGenre = (incomingGenre: string): string => {
  let genre = incomingGenre.toLowerCase();

  categories.forEach((item) => {
    if (incomingGenre && item.type.toLowerCase() === incomingGenre.toLowerCase()) {
      genre = item.name;
    }
  });
  return genre.toLowerCase();
};
