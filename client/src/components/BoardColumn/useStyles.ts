import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  columnContainer: {
    marginLeft: 10,
  },
  column: {
    listStyleType: 'none',
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#d0dbf2',
    padding: 0,
    margin: 0,
    marginBottom: 15,
    borderRadius: '0 0 5px 5px',
  },
  columnTitle: {
    padding: 10,
    width: 250,
    fontWeight: 'bold',
    backgroundColor: '#d0dbf2',
    borderRadius: '5px 5px 0 0',
  },
  addCardButton: {
    width: 100,
    alignSelf: 'start',
    color: '#818ba1',
  },
}));

export default useStyles;
