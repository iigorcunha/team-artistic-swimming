import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardFormContainer: {
    width: 235,
    borderRadius: 5,
    padding: 0,
    margin: 0,
    marginBottom: 5,
    marginLeft: 8,
    alignSelf: 'start',
  },
  formContainer: {
    padding: theme.spacing(1),
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  addCardButton: {
    color: '#818ba1',
    padding: '6px 4px',
  },
  textInput: {
    borderBottomStyle: 'none',
    backgroundColor: 'white',
    padding: theme.spacing(1),
    borderRadius: '8px 8px 0 0',
    '&:after': {
      borderBottomStyle: 'none',
    },
  },
  radioInputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopStyle: 'none',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '0 0 8px 8px',
    padding: theme.spacing(1),
    height: 45,
  },
  formButton: {
    margin: '12px 0',
    marginRight: 10,
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      filter: 'brightness(0.90)',
    },
  },
  badgesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 3,
  },
  badgeWrapper: {
    height: 20,
    width: 20,
    padding: 1,
    borderRadius: '50%',
    cursor: 'pointer',
    '&:not(:first-child)': {
      marginLeft: theme.spacing(1),
    },
  },
}));

export default useStyles;
