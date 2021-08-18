import { AuthProvider } from './useAuthContext';
import { BackdropProvider } from './useBackDropContext';
import { BoardProvider } from './useBoardContext';
import { CardProvider } from './useCardContext';
import { ChecklistProvider } from './useChecklistContext';
import { DialogProvider } from './useDialogContext';
import { PopoverProvider } from './usePopoverContext';
import { SnackBarProvider } from './useSnackbarContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <SnackBarProvider>
      <AuthProvider>
        <BoardProvider>
          <CardProvider>
            <ChecklistProvider>
              <BackdropProvider>
                <DialogProvider>
                  <PopoverProvider>{children}</PopoverProvider>
                </DialogProvider>
              </BackdropProvider>
            </ChecklistProvider>
          </CardProvider>
        </BoardProvider>
      </AuthProvider>
    </SnackBarProvider>
  );
};

export { AppProvider };
