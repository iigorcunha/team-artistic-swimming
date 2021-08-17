import { ItemApiData, UpdatedItem } from '../../interface/ChecklistApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const patchItem = async (item: UpdatedItem): Promise<ItemApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
    credentials: 'include',
  };
  return await fetch(`/card/checklist/item/${item._id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default patchItem;
