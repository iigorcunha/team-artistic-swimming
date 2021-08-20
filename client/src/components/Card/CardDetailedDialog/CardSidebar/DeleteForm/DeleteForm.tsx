import { Typography, Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useBackdrop } from '../../../../../context/useBackDropContext';
import { useBoard } from '../../../../../context/useBoardContext';
import { useCard } from '../../../../../context/useCardContext';
import { usePopover } from '../../../../../context/usePopoverContext';
import { FormBase } from '../FormBase/FormBase';
import useStyles from './useStyles';

const DeleteCardForm: React.FC = () => {
  const classes = useStyles();

  const { card, removeCard } = useCard();
  const { closeBackdrop } = useBackdrop();
  const { setInitialBoardList } = useBoard();
  const { setPopoverIsOpen } = usePopover();

  function handleDelete() {
    removeCard(card._id);
    closeBackdrop();
    setInitialBoardList();
    setPopoverIsOpen({ anchorEl: null, openedPopover: '' });
  }

  return (
    <FormBase formTitle="Delete this card">
      <Box className={classes.form}>
        <Typography>Do you want to delete this card?</Typography>
        <Button
          onClick={handleDelete}
          type="button"
          variant="contained"
          disableElevation
          className={classes.deleteButton}
          color="primary"
        >
          Delete
        </Button>
      </Box>
    </FormBase>
  );
};

export { DeleteCardForm };
