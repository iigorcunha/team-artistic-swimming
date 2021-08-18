import { UpdateColumn } from '../../interface/Board';
import { ColumnApiData } from '../../interface/BoardApiData';
import { FetchOptions } from '../../interface/FetchOptions';

const patchColumn = async (column: UpdateColumn): Promise<ColumnApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(column),
    credentials: 'include',
  };
  return await fetch(`/column/edit/${column._id}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default patchColumn;
