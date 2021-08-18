import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  inputForm: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(3),
    color: 'white',
  },
}));

export default useStyles;
