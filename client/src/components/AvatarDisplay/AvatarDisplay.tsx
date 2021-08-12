import { Box, IconButton } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import React, { useState, MouseEvent } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useAuth } from '../../context/useAuthContext';
import useStyles from './useStyles';
import avatarPic from '../../Images/demoUser1.png';

const AvatarDisplay = (): JSX.Element => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { loggedInUser } = useAuth();
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
    <Box className={classes.root}>
      <IconButton
        aria-label="show avatar menu"
        aria-controls="avatar menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.iconButton}
      >
        <Avatar
          alt="Profile Image"
          src={loggedInUser ? `https://robohash.org/${loggedInUser.email}.png` : avatarPic}
          className={classes.avatar}
        />
      </IconButton>
      <Menu
        id="avatar-menu"
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
    </Box>
  );
};

export default AvatarDisplay;
