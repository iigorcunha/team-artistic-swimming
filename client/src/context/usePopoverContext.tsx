import { useState, useContext, createContext } from 'react';

interface PopoverUpdate {
  anchorEl: Element | null;
  openedPopover: string;
}

interface IPopoverContext {
  anchorEl: Element | null;
  openedPopover: string;
  setPopoverIsOpen: (data: PopoverUpdate) => void;
  handleOpenPopover: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClosePopover: () => void;
}

export const PopoverContext = createContext<IPopoverContext>({} as IPopoverContext);

export const PopoverProvider: React.FC = ({ children }): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const [openedPopover, setOpenedPopover] = useState('');

  function setPopoverIsOpen(data: PopoverUpdate) {
    setAnchorEl(data.anchorEl);
    setOpenedPopover(data.openedPopover);
  }

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverIsOpen({ anchorEl: event.currentTarget, openedPopover: event.currentTarget.id });
  };

  const handleClosePopover = () => {
    setPopoverIsOpen({ anchorEl: null, openedPopover: '' });
  };

  return (
    <PopoverContext.Provider
      value={{
        setPopoverIsOpen,
        openedPopover,
        anchorEl,
        handleOpenPopover,
        handleClosePopover,
      }}
    >
      {children}
    </PopoverContext.Provider>
  );
};

export function usePopover(): IPopoverContext {
  return useContext(PopoverContext);
}
