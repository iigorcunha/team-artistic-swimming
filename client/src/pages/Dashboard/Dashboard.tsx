import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './useStyles';
import Board from '../../components/Board/Board';
import DashboardBar from '../../components/DashboardBar/DashboardBar';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <DashboardBar boardName="My School Board" />
      <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
        <CssBaseline />
        <Board />
      </Grid>
    </React.Fragment>
  );
}
