import { CardApiData } from '../../interface/CardApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const cardDetails = async (cardId: string): Promise<CardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/card/list/${cardId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default cardDetails;
