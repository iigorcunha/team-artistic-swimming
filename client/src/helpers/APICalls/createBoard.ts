import { CreateBoardApiData } from '../../interface/BoardApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const register = async (name: string): Promise<CreateBoardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
    credentials: 'include',
  };
  return await fetch(`/board/create`, fetchOptions)
    .then((res) => res.json())
    .then((data) => ({
      success: {
        message: 'created new board sucessfully',
        board: data,
      },
    }))
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default register;
