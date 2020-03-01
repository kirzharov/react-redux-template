type NameAndPosition = import("./lesson/list/types").NameAndPosition;

type BookT = {
  id: number;
  title: string;
  description: string;
  author: string;
  year: number;
  pages: number;
  isFavorite: boolean;
};
