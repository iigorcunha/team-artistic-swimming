import { CardApiData } from '../../interface/CardApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const getCards = async (boardId: string, currentMonth: Date): Promise<CardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/card/calendar/${boardId}?date=${currentMonth}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default getCards;
