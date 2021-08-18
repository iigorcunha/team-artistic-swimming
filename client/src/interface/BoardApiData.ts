import { Board } from './Board';

export interface BoardResponse extends Board{
  lastViewed: boolean;
  user: string;
  __v: string;
}
export interface BoardApiDataSuccess {
  message: string;
  board: BoardResponse;
}


export interface BoardApiData {
  error?: { message: string };
  success?: BoardApiDataSuccess;
}

export interface AllBoardResponse extends Omit<Board, 'columns'> {
  columns: string[];
  lastViewed: boolean;
  user: string;
  __v: string;
}

export interface AllBoardApiDataSuccess {
  message: string;
  boardsList: AllBoardResponse[];
}


export interface AllBoardApiData {
  error?: { message: string };
  success?: AllBoardApiDataSuccess;
}


export interface CreateBoardSuccess {
  message: string;
  board: AllBoardResponse;
}


export interface CreateBoardApiData {
  error?: { message: string };
  success?: CreateBoardSuccess;
}