import { AppBar, Button, Toolbar, Typography, Box } from '@material-ui/core';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import AddIcon from '@material-ui/icons/Add';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import DashboardBarMenu from '../DashboardBarMenu/DashboardBarMenu';
//import { User } from '../../interface/User';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import LayoutIcon from '../LayoutIcon/LayoutIcon';
import { useHistory } from 'react-router-dom';

interface Props {
  boardName: string;
  user: string; //user: User;
}

const DashboardBar = ({ boardName, user }: Props): JSX.Element => {
  const PropsButtons = { colorDashboard: '#666561', colorCalendar: '#759CFC' };
  const classes = useStyles(PropsButtons);
  const history = useHistory();

  const handleDashboardClick = async () => {
    history.push('/dashboard');
  };
  const handleCalendarClick = async () => {
    history.push('/calendar');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbarTop}>
          <Box className={classes.logoBox}>
            <img src={logo} alt="Kanban Logo" aria-label="Logo for the site" />
            <Typography className={classes.logoTitle}>Kanban</Typography>
          </Box>
          <Box className={classes.centerButtons}>
            <Button className={classes.dashboardButton} onClick={handleDashboardClick} startIcon={<LayoutIcon />}>
              Dashboard
            </Button>
            <Button
              className={classes.calendarButton}
              onClick={handleCalendarClick}
              startIcon={<CalendarTodayOutlinedIcon />}
            >
              Calendar
            </Button>
          </Box>
          <Button className={classes.createBoardButton} variant="contained" color="primary" startIcon={<AddIcon />}>
            Create Board
          </Button>
          <Box className={classes.avatar}>
            <AvatarDisplay loggedIn user={user}></AvatarDisplay>
          </Box>
        </Toolbar>
        <Toolbar className={classes.toolbarBottom}>
          <Typography className={classes.titleBottom}>{boardName}</Typography>
          <DashboardBarMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default DashboardBar;
