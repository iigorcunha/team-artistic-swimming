import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  hiddenWidget: {
    visibility: 'hidden',
  },
  visibleWidget: {
    display: 'flex',
    justifyContent: 'center',
  },
  addColumnDroppableArea: {
    width: 80,
    height: '95vh',
    backgroundColor: '#cccccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
  },
  addCircleOutlineIcon: {
    color: 'white',
    fontSize: 40,
    position: 'absolute',
  },
}));

export default useStyles;
