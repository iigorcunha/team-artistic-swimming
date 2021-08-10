import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
}));

export default useStyles;
