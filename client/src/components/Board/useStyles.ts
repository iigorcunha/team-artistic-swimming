import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  board: {
    display: 'flex',
    width: '90vw',
    height: '100vh',
    marginTop: 20,
    justifyContent: 'space-between',
  },
}));

export default useStyles;
