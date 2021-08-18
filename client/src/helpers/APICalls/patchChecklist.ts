import { CreateItem, ChecklistApiData } from '../../interface/ChecklistApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const patchChecklist = async (checklistId: string, items: CreateItem[]): Promise<ChecklistApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ items }),
    credentials: 'include',
  };
  return await fetch(`/card/checklist/${checklistId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default patchChecklist;
