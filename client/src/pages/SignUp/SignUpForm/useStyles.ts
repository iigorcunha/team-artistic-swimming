import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '47%', // Fix IE 11 issue.
    //marginTop: theme.spacing(1),
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 500,
    color: 'black',
    //color: 'rgb(0,0,0,0.4)', //light gray
    paddingTop: '0px',
    paddingLeft: '0px',
    marginLeft: '140%',
    width: '115px',
  },
  inputs: {
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
    color: '#759CFC', ////similar to nikko blue
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    marginLeft: 18,
    padding: 10,
    width: 140,
    height: 48,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    fontWeight: 500,
    backgroundColor: '#759CFC', ////similar to nikko blue
  },
  submitLogin: {
    marginTop: 35,
  },
  submitDemo: {
    marginTop: 0,
  },
}));

export default useStyles;
