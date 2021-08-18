import { Attachment, Card, ColorTags, Item } from './Board';

export interface UpdatedChecklist {
  _id?: string;
  name: string;
  items?: Item[];
}

export interface UpdatedComment {
  _id?: string;
  comment: string;
  username?: string;
  createdAt?: Date;
}

export interface UpdatedCard {
  _id: string;
  name?: string;
  colorCode?: ColorTags;
  deadline?: string;
  description?: string;
  tags?: string[];
  attachments?: Attachment[];
  checklists?: UpdatedChecklist[];
  comments?: UpdatedComment[];
}

export interface CardApiData {
  error?: string;
  success?: boolean;
  card?: Card;
}
