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
