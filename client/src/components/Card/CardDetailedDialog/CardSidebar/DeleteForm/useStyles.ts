import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    width: '100%',
  },
  inputForm: {
    marginBottom: theme.spacing(2),
  },
  deleteButton: {
    backgroundColor: 'red',
    marginTop: theme.spacing(2),
    color: 'white',
    '&:hover': {
      backgroundColor: 'red',
      filter: 'brightness(0.9)',
    },
  },
}));

export default useStyles;
