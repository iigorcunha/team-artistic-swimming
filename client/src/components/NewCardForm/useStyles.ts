import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardFormContainer: {
    width: 235,
    borderRadius: 5,
    padding: 0,
    paddingTop: 0,
    margin: 0,
    marginBottom: 5,
    marginLeft: 8,
    alignSelf: 'start',
  },
  addCardButton: {
    color: '#818ba1',
    padding: '6px 4px',
  },
  textInput: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderBottomStyle: 'none',
    backgroundColor: 'white',
    borderRadius: '8px 8px 0 0',
    '&:after': {
      borderBottomStyle: 'none',
    },
  },
  radioInputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `2px solid ${theme.palette.primary.main}`,
    borderTopStyle: 'none',
    backgroundColor: 'white',
    borderRadius: '0 0 8px 8px',
    paddingLeft: 5,
    height: 45,
  },
  formButton: {
    margin: '12px 0',
    marginRight: 10,
  },
  badgesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 3,
  },
  badgeWrapper: {
    marginRight: 10,
    height: 20,
    width: 20,
    borderRadius: '50%',
    cursor: 'pointer',
  },
}));

export default useStyles;
