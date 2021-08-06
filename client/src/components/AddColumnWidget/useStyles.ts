import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  hiddenWidget: {
    visibility: 'hidden',
  },
  visibleWidget: {},
  addColumnDroppableArea: {
    width: 80,
    height: '85vh',
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
