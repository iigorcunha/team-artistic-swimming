import { Popover as MaterialPopover } from '@material-ui/core';
import { usePopover } from '../../context/usePopoverContext';
import useStyles from './useStyles';

interface PopoverProps {
  onClose: () => void;
  name: string;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ name, onClose, children }) => {
  const classes = useStyles();
  const { anchorEl, openedPopover } = usePopover();
  return (
    <MaterialPopover
      elevation={5}
      className={classes.popover}
      id={name}
      anchorEl={anchorEl}
      onClose={onClose}
      open={openedPopover === name}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {children}
    </MaterialPopover>
  );
};

export { Popover };
