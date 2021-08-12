import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './useStyles';
import DashboardBar from '../../components/DashboardBar/DashboardBar';

import CalendarBoard from '../../components/CalendarBoard/CalendarBoard';
import React from 'react';

export default function Calendar(): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <DashboardBar boardName="My School Board" />
      <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
        <CssBaseline />
        <Grid item className={classes.drawerWrapper}>
          <CalendarBoard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
