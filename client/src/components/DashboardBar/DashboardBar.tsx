import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import AddIcon from '@material-ui/icons/Add';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import DashboardBarMenu from '../DashboardBarMenu/DashboardBarMenu';
import { User } from '../../interface/User';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
interface Props {
  boardName: string;
  user: User;
}

const DashboardBar = ({ boardName, user }: Props): JSX.Element => {
  const classes = useStyles();
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
          <Button className={classes.endButtons} variant="contained" color="primary" startIcon={<AddIcon />}>
            Create Board
          </Button>
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