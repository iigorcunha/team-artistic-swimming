import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
//import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
//import { useAuth } from '../../context/useAuthContext';
//import { useSocket } from '../../context/useSocketContext';
//import { useHistory } from 'react-router-dom';
//import { useEffect } from 'react';
import DashboardBar from '../../components/DashboardBar/DashboardBar';

import CalendarBoard from '../../components/CalendarBoard/CalendarBoard';
import React from 'react';

export default function Calendar(): JSX.Element {
  const classes = useStyles();

  const loggedInUser = 'Demo user';

  //const { loggedInUser } = useAuth();
  //const { initSocket } = useSocket();
  //const history = useHistory();

  //useEffect(() => {
  //  initSocket();
  //}, [initSocket]);

  //if (loggedInUser === undefined) return <CircularProgress />;
  //if (!loggedInUser) {
  //  history.push('/login');
  // loading for a split seconds until history.push works
  //  return <CircularProgress />;
  //}

  return (
    <React.Fragment>
      <DashboardBar user={loggedInUser} boardName="My School Board" />
      <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
        <CssBaseline />
        <Grid item className={classes.drawerWrapper}>
          <CalendarBoard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
