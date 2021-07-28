import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  columnContainer: {},
  column: {
    listStyleType: 'none',
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 4,
    backgroundColor: '#d0dbf2',
    marginLeft: 10,
  },
  columnTitle: {
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
}));

export default useStyles;
