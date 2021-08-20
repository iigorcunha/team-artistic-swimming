import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
