import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  board: {
    display: 'flex',
    width: '90vw',
    height: '100vh',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;
