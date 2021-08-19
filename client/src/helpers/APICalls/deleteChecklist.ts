import { ChecklistApiData } from '../../interface/ChecklistApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const deleteChecklist = async (checklistId: string): Promise<ChecklistApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/card/checklist/${checklistId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default deleteChecklist;
