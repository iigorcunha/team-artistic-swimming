import { AppBar, Button, Toolbar, Typography, Box } from '@material-ui/core';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import DashboardBarMenu from '../DashboardBarMenu/DashboardBarMenu';
import useStyles from './useStyles';
import logo from '../../Images/logo.png';
import LayoutIcon from '../LayoutIcon/LayoutIcon';
import { useHistory } from 'react-router-dom';
import { useBoard } from '../../context/useBoardContext';
import NewBoardDialogBox from '../NewBoardDialog/NewBoardDialog';

const DashboardBar = (): JSX.Element => {
  const PropsButtons = { colorDashboard: '#666561', colorCalendar: '#759CFC' };
  const classes = useStyles(PropsButtons);
  const history = useHistory();
  const { boardName } = useBoard();

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
          <NewBoardDialogBox />
          <Box className={classes.avatar}>
            <AvatarDisplay />
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
