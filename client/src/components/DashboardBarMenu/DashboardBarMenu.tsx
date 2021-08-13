import { useState, MouseEvent } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './useStyles';
import { useBoard } from '../../context/useBoardContext';

const DashboardBarMenu = (): JSX.Element => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { boardList, switchBoardInView } = useBoard();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="show dashboard bar menu"
        aria-controls="dashboard bar menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <Menu
        id="dashboard-bar-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        getContentAnchorEl={null}
      >
        {boardList
          ? boardList.map((e) => (
              <MenuItem key={e._id} onClick={() => switchBoardInView(e._id)}>
                {e.name}
              </MenuItem>
            ))
          : null}
      </Menu>
    </div>
  );
};

export default DashboardBarMenu;
