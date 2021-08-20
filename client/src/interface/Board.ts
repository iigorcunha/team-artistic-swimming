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
  colorCode: string;
  board: string;
  deadline?: Date;
  description?: string;
  tags?: string[];
  attachments?: Attachment[];
  checklists?: Checklist[];
  comments?: Comment[];
}

export interface CreateCard {
  name: string;
  colorCode?: string;
  boardId?: string;
}

export interface UpdateColumn {
  _id: string;
  name: string;
}

export interface Column {
  _id: string;
  cards: Card[];
  name: string;
}

export interface CalendarCards {
  _id: string;
  title: string;
  resource: string;
  start?: Date;
  end?: Date;
}

export interface Board {
  _id: string;
  columns: Column[];
  name: string;
  lastViewed: boolean;
}
