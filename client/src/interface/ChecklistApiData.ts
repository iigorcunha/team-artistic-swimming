export interface UpdatedItem {
  _id: string;
  name?: string;
  done?: boolean;
}

export interface ItemApiData {
  error?: string;
  success?: boolean;
}

export interface CreateItem {
  _id?: string;
  name: string;
  done?: boolean;
}

export interface ChecklistApiData {
  error?: string;
  success?: boolean;
}
