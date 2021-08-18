import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { useBoard } from '../../../context/useBoardContext';
import { usePopover } from '../../../context/usePopoverContext';
import { FormBase } from '../../Card/CardDetailedDialog/CardSidebar/FormBase/FormBase';
import useStyles from './useStyles';

interface BoardColumnDeleteProps {
  columnId: string;
}

const BoardColumnDelete: React.FC<BoardColumnDeleteProps> = ({ columnId }) => {
  const classes = useStyles();

  const { removeColumn } = useBoard();
  const { handleClosePopover } = usePopover();

  function handleDelete() {
    removeColumn(columnId);
    handleClosePopover();
  }
  return (
    <FormBase formTitle="Delete column">
      <Typography variant="body1">Do you want to delete this column?</Typography>
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
    </FormBase>
  );
};

export { BoardColumnDelete };
