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
    backgroundColor: '#F4F6FF',
    padding: 0,
    margin: 0,
    marginBottom: 15,
    borderRadius: '0 0 8px 8px',
  },
  columnTitle: {
    padding: 10,
    width: 250,
    fontWeight: 'bold',
    backgroundColor: '#F4F6FF',
    borderRadius: '8px 8px 0 0',
  },
}));

export default useStyles;
