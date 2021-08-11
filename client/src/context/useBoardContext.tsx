import { useState, useContext, createContext, FunctionComponent, useCallback, useEffect } from 'react';
import { Column } from '../interface/Board';
// import { columns } from '../mocks/mockBoardData';
import getAllBoards from '../helpers/APICalls/getAllBoards';
import getBoard from '../helpers/APICalls/getBoard';
import createBoard from '../helpers/APICalls/createBoard';
import { AllBoardResponse } from '../interface/BoardApiData';

interface IBoardContext {
  boardList: AllBoardResponse[] | undefined;
  boardColumns: Column[] | undefined;
  boardName: string;
  updateBoard: (board: Column[]) => void;
  switchBoardInView: (boardId: string) => void;
  createNewBoard: (name: string) => void;
}

export const BoardContext = createContext<IBoardContext>({
  boardList: [],
  boardColumns: [],
  boardName: '',
  updateBoard: () => null,
  switchBoardInView: () => null,
  createNewBoard: () => null,
});

export const BoardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [boardColumns, setBoardColumns] = useState<Column[]>();
  const [boardList, setBoardList] = useState<AllBoardResponse[]>([]);
  const [boardName, setBoardName] = useState<string>('');

  useEffect(() => {
    const setInitialBoardList = async () => {
      const allboardResponse = await getAllBoards();
      if (allboardResponse.success) {
        const { boardsList } = allboardResponse.success;
        setBoardList(boardsList);
        const lastViewedBoard = boardsList.find((e: AllBoardResponse) => e.lastViewed === true);
        if (lastViewedBoard) {
          const lastViewedBoardDetails = await getBoard(lastViewedBoard._id);
          if (lastViewedBoardDetails.success) {
            const { board } = lastViewedBoardDetails.success;
            setBoardColumns(board.columns);
            setBoardName(board.name);
          }
        }
      }
    };
    setInitialBoardList();
  }, []);

  // IGOR IS WORKING ON THIS
  const updateBoard = useCallback(() => {
    // setBoard(newBoard);
  }, []);

  const switchBoardInView = useCallback(async (boardId) => {
    const selectedBoardDetails = await getBoard(boardId);
    if (selectedBoardDetails.success) {
      const { board } = selectedBoardDetails.success;
      setBoardColumns(board.columns);
      setBoardName(board.name);
      return;
    }
    return;
  }, []);

  const createNewBoard = useCallback(
    async (name) => {
      const newlyCreatedBoard = await createBoard(name);
      if (newlyCreatedBoard.success) {
        switchBoardInView(newlyCreatedBoard.success.board._id);
        setBoardList([...boardList, newlyCreatedBoard.success?.board]);
      }
    },
    [switchBoardInView, boardList],
  );
  return (
    <BoardContext.Provider
      value={{ boardList, boardColumns, boardName, updateBoard, switchBoardInView, createNewBoard }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export function useBoard(): IBoardContext {
  return useContext(BoardContext);
}
