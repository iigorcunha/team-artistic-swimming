import { Column } from './Column';

export interface BoardApiDataSuccess {
  message: string;
  board: [];
}

export interface Board {
  columns: [];
}

export interface BoardApiData {
  error?: { message: string };
  success?: BoardApiDataSuccess;
  board: Board
}

