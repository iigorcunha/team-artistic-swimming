import { useState, useContext, createContext } from 'react';

interface IDialogContext {
  openedDialog: string;
  handleDialog: (dialogId: string) => void;
  onClose: () => void;
}

export const DialogContext = createContext<IDialogContext>({} as IDialogContext);

export const DialogProvider: React.FC = ({ children }): JSX.Element => {
  const [openedDialog, setOpenedDialog] = useState<string>('closed');

  function handleDialog(dialogId: string) {
    setOpenedDialog(dialogId);
  }

  function onClose() {
    setOpenedDialog('closed');
  }

  return (
    <DialogContext.Provider
      value={{
        openedDialog,
        onClose,
        handleDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export function useDialog(): IDialogContext {
  return useContext(DialogContext);
}
