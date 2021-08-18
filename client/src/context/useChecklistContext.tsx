import { useState, useContext, createContext } from 'react';

interface IChecklistContext {
  openedItem: string;
  handleItem: (itemId: string) => void;
}

export const ChecklistContext = createContext<IChecklistContext>({} as IChecklistContext);

export const ChecklistProvider: React.FC = ({ children }): JSX.Element => {
  const [openedItem, setOpenedItem] = useState<string>('closed');

  function handleItem(itemId: string) {
    setOpenedItem(itemId);
  }

  return (
    <ChecklistContext.Provider
      value={{
        openedItem,

        handleItem,
      }}
    >
      {children}
    </ChecklistContext.Provider>
  );
};

export function useChecklist(): IChecklistContext {
  return useContext(ChecklistContext);
}
