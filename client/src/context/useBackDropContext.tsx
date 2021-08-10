import { useState, useContext, createContext, FunctionComponent, useCallback } from 'react';

interface IBackdropContext {
  backdropOpen: boolean;
  openBackdrop: () => void;
  closeBackdrop: () => void;
}

export const BackdropContext = createContext<IBackdropContext>({
  backdropOpen: false,
  openBackdrop: () => null,
  closeBackdrop: () => null,
});

export const BackdropProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [backdropOpen, setBackdrop] = useState<boolean>(false);

  const openBackdrop = useCallback(() => {
    setBackdrop(true);
  }, []);

  const closeBackdrop = useCallback(() => {
    setBackdrop(false);
  }, []);

  return (
    <BackdropContext.Provider value={{ backdropOpen, openBackdrop, closeBackdrop }}>
      {children}
    </BackdropContext.Provider>
  );
};

export function useBackdrop(): IBackdropContext {
  return useContext(BackdropContext);
}
