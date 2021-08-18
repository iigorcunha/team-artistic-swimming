import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  inputContent: {
    display: 'flex',
    width: '100%',
    marginLeft: theme.spacing(2),
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  inputLabelText: {
    fontWeight: 'bold',
  },
  icons: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3),
  },
  linkText: {
    fontSize: theme.spacing(2),
    textDecoration: 'underline',
    marginTop: theme.spacing(1),
  },
  button: {
    marginRight: theme.spacing(2),
    width: theme.spacing(18),
    height: theme.spacing(5),
    borderRadius: theme.spacing(1),
    color: '#FFFFFF',
    fontSize: theme.spacing(2),
    fontWeight: theme.typography.fontWeightMedium,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      filter: 'brightness(0.9)',
    },
  },
}));

export { useStyles };
