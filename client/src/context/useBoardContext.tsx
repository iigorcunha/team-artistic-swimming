import { useState, useContext, createContext, FunctionComponent, useCallback, useEffect } from 'react';
import { Column } from '../interface/Column';
import { columns } from '../mocks/mockBoardData';
import getAllBoards from '../helpers/APICalls/getAllBoards';
import getBoard from '../helpers/APICalls/getBoard';

interface IBoardContext {
  boardList: Array<any>;
  boardColumns: Column[];
  boardName: string;
  updateBoard: (board: Column[]) => void;
  switchBoardInView: (boardId: string) => void;
}

export const BoardContext = createContext<IBoardContext>({
  boardList: [],
  boardColumns: [],
  boardName: '',
  updateBoard: () => null,
  switchBoardInView: () => null,
});

export const BoardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [boardColumns, setBoardColumns] = useState([]);
  const [boardList, setBoardList] = useState([]);
  const [boardName, setBoardName] = useState('');

  useEffect(() => {
    const setInitialBoardList = async () => {
      const allboardResponse = await getAllBoards();
      if (allboardResponse) {
        setBoardList(allboardResponse);
      }
      const lastViewedBoard = allboardResponse.find((e: any) => e.lastViewed === true);
      const lastViewedBoardDetails = await getBoard(lastViewedBoard._id);
      setBoardColumns(lastViewedBoardDetails.columns);
      setBoardName(lastViewedBoardDetails.name);
    };
    setInitialBoardList();
  }, []);

  const updateBoard = useCallback((newBoard: Column[]) => {
    // setBoard(newBoard);
  }, []);

  const switchBoardInView = useCallback(async (boardId) => {
    const selectedBoardDetails = await getBoard(boardId);
    console.log(selectedBoardDetails);
    if (selectedBoardDetails && selectedBoardDetails._id) {
      setBoardColumns(selectedBoardDetails.columns);
      setBoardName(selectedBoardDetails.name);
      return;
    }
    return;
  }, []);

  return (
    <BoardContext.Provider value={{ boardList, boardColumns, boardName, updateBoard, switchBoardInView }}>
      {children}
    </BoardContext.Provider>
  );
};

export function useBoard(): IBoardContext {
  return useContext(BoardContext);
}
