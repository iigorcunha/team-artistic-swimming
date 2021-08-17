export interface Card {
  _id?: string;
  name: string;
  colorCode: ColorTags;
  deadline?: string;
  attachments?: string[];
  tags?: string[];
}

export interface Column {
  _id?: string;
  cards: Card[];
  name: string;
}

export interface Board {
  _id: string;
  columns: Column[];
  name: string;
  lastViewed: boolean;
}
export type ColorTags = 'red' | 'blue' | 'yellow' | 'green' | '';
