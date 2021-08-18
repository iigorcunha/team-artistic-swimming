import { Column } from '../../interface/Board';
import { HandleBoardApiData } from '../../interface/BoardApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const handleBoard = async (boardId: string, columns: Column[]): Promise<HandleBoardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ columns }),
    credentials: 'include',
  };
  return await fetch(`/board/handle/${boardId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default handleBoard;
