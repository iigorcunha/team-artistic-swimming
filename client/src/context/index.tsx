import { AuthProvider } from './useAuthContext';
import { BackdropProvider } from './useBackDropContext';
import { BoardProvider } from './useBoardContext';
import { CalendarProvider } from './useCalendarContext';
import { CardProvider } from './useCardContext';
import { ChecklistProvider } from './useChecklistContext';
import { DialogProvider } from './useDialogContext';
import { PopoverProvider } from './usePopoverContext';
import { SnackBarProvider } from './useSnackbarContext';
import { TeamBoardProvider } from './useTeamBoardContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <SnackBarProvider>
      <AuthProvider>
        <BoardProvider>
          <TeamBoardProvider>
            <CardProvider>
              <ChecklistProvider>
                <CalendarProvider>
                  <BackdropProvider>
                    <DialogProvider>
                      <PopoverProvider>{children}</PopoverProvider>
                    </DialogProvider>
                  </BackdropProvider>
                </CalendarProvider>
              </ChecklistProvider>
            </CardProvider>
          </TeamBoardProvider>
        </BoardProvider>
      </AuthProvider>
    </SnackBarProvider>
  );
};

export { AppProvider };
