import { AllBoardApiData } from '../../interface/BoardApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const getAllBoards = async (): Promise<AllBoardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/board/list`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default getAllBoards;
