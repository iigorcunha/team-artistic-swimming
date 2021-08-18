export interface Comment {
  _id: string;
  username: string;
  comment: string;
  createdAt: Date;
}

export interface Item {
  _id: string;
  name: string;
  done: boolean;
}

export interface Checklist {
  _id: string;
  name: string;
  items: Item[];
}

export interface Attachment {
  _id?: string;
  name: string;
  url: string;
}

export interface Card {
  _id: string;
  name: string;
  colorCode: ColorTags;
  deadline?: Date;
  description?: string;
  tags?: string[];
  attachments?: Attachment[];
  checklists?: Checklist[];
  comments?: Comment[];
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
  lastViewed: boolean;
}
export type ColorTags = 'red' | 'blue' | 'yellow' | 'green' | '';
