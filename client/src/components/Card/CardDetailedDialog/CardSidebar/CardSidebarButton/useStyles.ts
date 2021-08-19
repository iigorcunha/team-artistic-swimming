import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sidebarCardButtons: {
    marginTop: theme.spacing(1),
    color: '#9BA9CC',
    '&:hover': {
      filter: 'brightness(0.90)',
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export default useStyles;
