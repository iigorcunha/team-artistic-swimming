export interface Card {
  _id: string;
  name: string;
  color: ColorTags;
  deadline?: string;
}
export interface Column {
  _id: string;
  cards: Card[];
  name: string;
}

export interface Board {
  _id: string;
  columns: Column[];
  name: string;
}
export type ColorTags = 'red' | 'blue' | 'yellow' | 'green' | '';
