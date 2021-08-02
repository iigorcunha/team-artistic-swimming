import { useState, useContext, createContext, FunctionComponent, useCallback, Dispatch, SetStateAction } from 'react';
import { Card, Column } from '../interface/Column';
import { columns } from '../mocks/mockBoardData';

interface IBoardContext {
  board: Column[];
  updateBoard: (board: Column[]) => void;
}

export const BoardContext = createContext<IBoardContext>({
  board: [],
  updateBoard: () => null,
});

export const BoardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [board, setBoard] = useState(columns);

  const updateBoard = useCallback((newBoard: Column[]) => {
    setBoard(newBoard);
  }, []);

  return <BoardContext.Provider value={{ board, updateBoard }}>{children}</BoardContext.Provider>;
};

export function useBoard(): IBoardContext {
  return useContext(BoardContext);
}
