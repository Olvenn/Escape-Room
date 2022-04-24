export type ErrorType = unknown;

export type Quest = {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: string,
  level: string,
  peopleCount: number[],
  duration: number,
}

export type DefaultThemeType = {
  theme: {
    color: {
      whisper: string;
      nero: string;
      black: string;
      white: string;
    };
    font: { base: string };
  };
}
