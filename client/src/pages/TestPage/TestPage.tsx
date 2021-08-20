import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import useStyles from './useStyles';
import DashboardBar from '../../components/DashboardBar/DashboardBar';

import ImageUploadButton from '../../components/ImageUploadButton/ImageUploadButton';
import React from 'react';

export default function TestPage(): JSX.Element {
  const classes = useStyles();

  return (
    <React.Fragment>
      <DashboardBar />
      <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
        <CssBaseline />
        <Grid item className={classes.drawerWrapper}>
          <ImageUploadButton />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
