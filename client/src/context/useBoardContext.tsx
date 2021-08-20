import { useState, useContext, createContext, FunctionComponent, useCallback } from 'react';
import { Board, Column } from '../interface/Board';
import getAllBoards from '../helpers/APICalls/getAllBoards';
import getBoard from '../helpers/APICalls/getBoard';
import createBoard from '../helpers/APICalls/createBoard';
import { BoardWithoutNestedChildren } from '../interface/BoardApiData';
import handleBoard from '../helpers/APICalls/handleBoard';
import { NewColumDetails } from '../interface/NewColumnDetails';

interface IBoardContext {
  boardList: BoardWithoutNestedChildren[] | undefined;
  board: Board;
  boardName: string;
  newColumnDialogOpen: boolean;
  newColumnDetails: NewColumDetails;
  clearNewColumnDetails: () => void;
  addNewColumnDetails: (data: NewColumDetails) => void;
  toggleNewColumnDialog: () => void;
  updateBoard: (columns: Column[]) => void;
  switchBoardInView: (boardId: string) => void;
  createNewBoard: (name: string) => void;
  setInitialBoardList: () => Promise<void>;
}

export const BoardContext = createContext<IBoardContext>({} as IBoardContext);

export const BoardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [board, setBoard] = useState<Board>({} as Board);
  const [boardList, setBoardList] = useState<BoardWithoutNestedChildren[]>([]);
  const [newColumnDialogOpen, setNewColumnDialog] = useState<boolean>(false);
  const [newColumnDetails, setNewColumnDetails] = useState<NewColumDetails>({} as NewColumDetails);
  const [boardName, setBoardName] = useState<string>('');

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

  const toggleNewColumnDialog = () => {
    setNewColumnDialog(!newColumnDialogOpen);
  };

  const clearNewColumnDetails = () => {
    setNewColumnDetails({} as NewColumDetails);
  };

  const addNewColumnDetails = (data: NewColumDetails) => {
    setNewColumnDetails(data);
  };
  return (
    <BoardContext.Provider
      value={{
        boardList,
        board,
        boardName,
        newColumnDialogOpen,
        newColumnDetails,
        clearNewColumnDetails,
        addNewColumnDetails,
        toggleNewColumnDialog,
        setInitialBoardList,
        updateBoard,
        switchBoardInView,
        createNewBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export function useBoard(): IBoardContext {
  return useContext(BoardContext);
}
