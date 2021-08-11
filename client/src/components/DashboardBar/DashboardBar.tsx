import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import DashboardBarMenu from '../DashboardBarMenu/DashboardBarMenu';
import { User } from '../../interface/User';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import { useBoard } from '../../context/useBoardContext';
import NewBoardDialogBox from '../NewBoardDialog/NewBoardDialog';

interface Props {
  user: User;
}

const DashboardBar = ({ user }: Props): JSX.Element => {
  const classes = useStyles();
  const { boardName } = useBoard();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbarTop}>
          <img src={logo} alt="Kanban Logo" aria-label="Logo for the site" />
          <Button className={classes.centerButtons} startIcon={<DashboardOutlinedIcon />}>
            Dashboard
          </Button>
          <Button className={classes.centerButtons} startIcon={<CalendarTodayOutlinedIcon />}>
            Calendar
          </Button>
          <NewBoardDialogBox />
          <AvatarDisplay loggedIn user={user}></AvatarDisplay>
        </Toolbar>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title}>{boardName}</Typography>
          <DashboardBarMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default DashboardBar;
