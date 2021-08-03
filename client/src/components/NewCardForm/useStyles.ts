import { makeStyles } from '@material-ui/core/styles';
import { green, red, blue, yellow } from '@material-ui/core/colors';

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
    borderRadius: '5px 5px 0 0',
    padding: '0 3px',
  },
  radionInputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: `2px solid ${theme.palette.primary.main}`,
    borderTopStyle: 'none',
    backgroundColor: 'white',
    borderRadius: '0 0 5px 5px',
    paddingLeft: 5,
  },
  radioGreen: {
    color: `${green[400]} !important`,
  },
  radioRed: {
    color: `${red[400]} !important`,
  },
  radioBlue: {
    color: `${blue[400]} !important`,
  },
  radioYellow: {
    color: `${yellow[400]} !important`,
  },
  formButton: {
    margin: '12px 0',
    marginRight: 10,
  },
}));

export default useStyles;
