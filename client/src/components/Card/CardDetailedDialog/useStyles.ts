import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dialogBox: {
    padding: theme.spacing(3),
  },
  title: {
    margin: 0,
  },
  boxTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    marginRight: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  newColumnForm: {
    display: 'flex',
    width: '100%',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  iconsColor: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3),
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
