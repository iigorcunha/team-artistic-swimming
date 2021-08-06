import { makeStyles } from '@material-ui/core/styles';
//import { normalize } from 'path';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 0,
    paddingBottom: 0,
  },
  loginWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '62.2vh',
    paddingTop: 0,
    paddingBottom: 0,
  },
  welcome: {
    fontSize: 28,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 52,
    marginLeft: 35,
    color: '#000000',
    fontWeight: 400,
    fontStyle: 'normal',
    fontFamily: "'Mundial'",
  },
  authHeaderWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 10,
    paddingBottom: 0,
  },
}));

export default useStyles;

//fontFamily: "'Open Sans'",
