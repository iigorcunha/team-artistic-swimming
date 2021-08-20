import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
  },
  calendarWrapper: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    marginLeft: '2vw',
    marginRight: '2vw',
    height: '80vh',
    width: '91vw',
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
  typography: {
    padding: theme.spacing(1),
  },
  toolbarButtons: {
    padding: theme.spacing(1),
    color: theme.palette.primary.main,
    fontSize: 30,
    '&:hover': {
      color: theme.palette.primary.main,
      filter: 'brightness(0.9)',
    },
  },
}));

export default useStyles;
