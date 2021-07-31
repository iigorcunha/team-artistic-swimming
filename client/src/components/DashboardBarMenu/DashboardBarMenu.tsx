import { useState, MouseEvent } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { useAuth } from '../../context/useAuthContext';

const DashboardBarMenu = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logout } = useAuth();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <div>
      <IconButton
        aria-label="show dashboard bar menu"
        aria-controls="dashboard bar menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
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
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
        <MenuItem onClick={(e) => e.preventDefault()}>Profile</MenuItem>
        <MenuItem onClick={(e) => e.preventDefault()}>Update Profile Picture</MenuItem>
      </Menu>
    </div>
  );
};

export default DashboardBarMenu;
