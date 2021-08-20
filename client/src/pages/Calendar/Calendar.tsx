import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './useStyles';
import DashboardBar from '../../components/DashboardBar/DashboardBar';

import CalendarBoard from '../../components/CalendarBoard/CalendarBoard';
import React, { useEffect } from 'react';
import { useCard } from '../../context/useCardContext';
import { useCalendar } from '../../context/useCalendarContext';

export default function Calendar(): JSX.Element {
  const classes = useStyles();

  const { listCalendarCards } = useCard();
  const { currentMonth } = useCalendar();

  useEffect(() => {
    listCalendarCards(currentMonth);
  }, [listCalendarCards, currentMonth]);

  return (
    <React.Fragment>
      <DashboardBar />
      <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
        <CssBaseline />
        <Grid item className={classes.drawerWrapper}>
          <CalendarBoard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
