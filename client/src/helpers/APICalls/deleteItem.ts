import { ItemApiData } from '../../interface/ChecklistApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const deleteItem = async (itemId: string): Promise<ItemApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/card/checklist/item/${itemId}`, fetchOptions)
    .then((res) => res.json().then((data) => data))
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default deleteItem;
