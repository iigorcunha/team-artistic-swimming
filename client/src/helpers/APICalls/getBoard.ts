import { BoardApiData } from '../../interface/BoardApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const getBoard = async (boardId: string): Promise<BoardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/board/list/${boardId}`, fetchOptions)
    .then((res) => res.json())
    .then((data) => ({
      success: {
        message: 'fetched sucessfully',
        board: data,
      },
    }))
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default getBoard;