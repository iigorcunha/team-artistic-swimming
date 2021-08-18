import { CreateCard } from '../../interface/Board';
import { CardApiData } from '../../interface/CardApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const postCard = async (card: CreateCard): Promise<CardApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(card),
    credentials: 'include',
  };
  return await fetch(`/card/create`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default postCard;
