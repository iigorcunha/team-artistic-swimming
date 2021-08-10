import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  centerButtons: {
    margin: theme.spacing(1),
    alignSelf: 'center',
  },
  logo: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  menuButton: {
    alignSelf: 'flex-end',
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  toolbar: {
    minHeight: 64,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: 'white',
  },
  toolbarTop: {
    minHeight: 32,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export default useStyles;
