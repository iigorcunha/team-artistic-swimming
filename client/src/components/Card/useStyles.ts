import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    width: 235,
    height: 85,
    borderRadius: 5,
    padding: 10,
    paddingTop: 15,
    margin: 0,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  cardName: {
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 6,
  },
}));

export default useStyles;
