import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  formHeader: {
    fontSize: theme.spacing(2),
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
