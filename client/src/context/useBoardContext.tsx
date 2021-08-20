import { useState, useContext, createContext, FunctionComponent, useCallback } from 'react';
import { Board, Column, UpdateColumn } from '../interface/Board';
import getAllBoards from '../helpers/APICalls/getAllBoards';
import getBoard from '../helpers/APICalls/getBoard';
import createBoard from '../helpers/APICalls/createBoard';
import { BoardWithoutNestedChildren } from '../interface/BoardApiData';
import handleBoard from '../helpers/APICalls/handleBoard';
import deleteColumn from '../helpers/APICalls/deleteColumn';
import patchColumn from '../helpers/APICalls/patchColumn';

interface IBoardContext {
  boardList: BoardWithoutNestedChildren[] | undefined;
  board: Board;
  boardName: string;
  updateBoard: (columns: Column[]) => void;
  switchBoardInView: (boardId: string) => void;
  createNewBoard: (name: string) => void;
  setInitialBoardList: () => Promise<void>;
  fetchBoard: (boardId: string) => Promise<Board | void>;
  removeColumn: (columnId: string) => Promise<void>;
  editableColumn: string;
  handleEditColumn: (columnId: string) => void;
  updateColumn: (column: UpdateColumn) => Promise<void>;
}

export const BoardContext = createContext<IBoardContext>({} as IBoardContext);

export const BoardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [board, setBoard] = useState<Board>({} as Board);
  const [boardList, setBoardList] = useState<BoardWithoutNestedChildren[]>([]);
  const [boardName, setBoardName] = useState<string>('');
  const [editableColumn, setEditableColumn] = useState('');

  async function fetchBoard(boardId: string): Promise<Board | void> {
    const response = await getBoard(boardId);

    if (response.board) {
      setBoard(response.board);
    }

    if (response.error) {
      console.error(response.error);
    }
  }

  const setInitialBoardList = useCallback(async () => {
    const allBoardResponse = await getAllBoards();
    if (allBoardResponse.boards) {
      const { boards } = allBoardResponse;
      setBoardList(boards);
      const lastViewedBoard = boards.find((e: BoardWithoutNestedChildren) => e.lastViewed === true);
      if (lastViewedBoard) {
        const lastViewedBoardDetails = await getBoard(lastViewedBoard._id);
        if (lastViewedBoardDetails.board) {
          const { board } = lastViewedBoardDetails;
          setBoard(board);
          setBoardName(board.name);
        }
      } else {
        // Incase there is no board marked as last viewed, the first board on the list will be rendered
        const firstBoard = await getBoard(allBoardResponse.boards[0]._id);
        if (firstBoard.board) {
          const { board } = firstBoard;
          setBoard(board);
          setBoardName(board.name);
        }
      }
    }
  }, []);

  const updateBoard = useCallback(
    async (columns: Column[]) => {
      setBoard((oldBoard) => {
        const newBoard = oldBoard;

        newBoard.columns = columns;

        return newBoard;
      });
      const boardResponse = await handleBoard(board._id, columns);
      if (boardResponse.board) {
        setBoard(boardResponse.board);
      }
    },
    [board._id],
  );

  const switchBoardInView = useCallback(async (boardId) => {
    const selectedBoardDetails = await getBoard(boardId);
    if (selectedBoardDetails.board) {
      const { board } = selectedBoardDetails;
      setBoard(board);
      setBoardName(board.name);
      return;
    }
    return;
  }, []);

  const createNewBoard = useCallback(
    async (name) => {
      const newlyCreatedBoard = await createBoard(name);
      const { board } = newlyCreatedBoard;
      if (board) {
        switchBoardInView(board._id);
        setBoardList((oldBoardList) => [...oldBoardList, board]);
      }
    },
    [switchBoardInView],
  );

  async function removeColumn(columnId: string) {
    const response = await deleteColumn(columnId);

    if (response.success) {
      fetchBoard(board._id);
    }

    if (response.error) {
      console.error(response.error);
    }
  }

  async function updateColumn(column: UpdateColumn) {
    const response = await patchColumn(column);

    if (response.column) {
      await fetchBoard(board._id);
    }

    if (response.error) {
      console.error(response.error);
    }
  }

  function handleEditColumn(columnId: string) {
    setEditableColumn(columnId);
  }

  return (
    <BoardContext.Provider
      value={{
        boardList,
        board,
        boardName,
        setInitialBoardList,
        updateBoard,
        switchBoardInView,
        createNewBoard,
        fetchBoard,
        removeColumn,
        editableColumn,
        handleEditColumn,
        updateColumn,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export function useBoard(): IBoardContext {
  return useContext(BoardContext);
}
