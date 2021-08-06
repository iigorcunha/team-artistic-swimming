import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import useStyles from './useStyles';

const Unauthorized = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container component="main" alignItems="center" direction="column" className={classes.root}>
      <CssBaseline />
      <Box mt={1} />
      <Typography variant="h1" noWrap className={classes.title}>
        403
      </Typography>
      <Box mt={2} />
      <Typography variant="h3" noWrap className={classes.subTitle}>
        ACCESS FORBIDDEN
      </Typography>
      <Box mt={4} />
      <Typography variant="h5" noWrap className={classes.regularText}>
        Unauthorized user
      </Typography>
      <Box mt={3} />
      <Link component={RouterLink} to="/login" variant="h5" underline="always" noWrap className={classes.regularText}>
        Back to Login page
      </Link>
    </Grid>
  );
};

export default Unauthorized;
