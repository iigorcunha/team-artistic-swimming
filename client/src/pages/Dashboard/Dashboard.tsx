import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();
  // Empty Dashboard just for testing
  console.log('Dashboard access succesfull');
  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <CssBaseline />
      <Grid item className={classes.drawerWrapper}>
        <h1>Dashboard Test</h1>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

