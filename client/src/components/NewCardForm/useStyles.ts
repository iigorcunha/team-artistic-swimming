import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardForm: {
    width: 235,
    height: 85,
    borderRadius: 5,
    padding: 0,
    paddingTop: 0,
    margin: 0,
    marginBottom: 5,
    backgroundColor: 'white',
    border: `2px solid ${theme.palette.primary.main}`,
  },
  addCardButton: {
    width: 100,
    color: '#818ba1',
  },
}));

export default useStyles;
