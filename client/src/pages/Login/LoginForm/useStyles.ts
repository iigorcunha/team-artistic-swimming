import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '47%', // Fix IE 11 issue.
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
    color: 'black',
    paddingLeft: '0px',
    marginLeft: '100%',
    width: '115px',
  },
  inputs: {
    margin: 0,
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    height: '2.15rem',
    fontSize: '16px',
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  inputEmail: {
    '&::placeholder': {
      fontStyle: 'normal',
      color: 'black',
      opacity: 1,
      textAlign: 'center',
    },
  },
  inputPassword: {
    '&::placeholder': {
      fontStyle: 'normal',
      color: 'black',
      opacity: 1,
      textAlign: 'center',
    },
  },
  forgot: {
    paddingRight: 10,
    color: '#759CFC',
  },
  submitsContainer: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  submit: {
    width: 140,
    height: 48,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    fontWeight: 500,
    backgroundColor: '#759CFC',
    color: 'white',
  },
  submitLogin: {
    marginTop: 25,
  },
  submitDemo: {
    marginTop: 20,
  },
}));

export default useStyles;
