import { makeStyles, Theme } from '@material-ui/core';

interface CardDescriptionStyleProps {
  enableInput: boolean;
}

const useStyles = makeStyles<Theme, CardDescriptionStyleProps>((theme) => ({
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
  form: {
    width: '100%',
  },
  textArea: {
    width: '100%',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    marginLeft: 0,
    backgroundColor: ({ enableInput }) => (!enableInput ? theme.palette.secondary.main : ''),
    borderRadius: theme.spacing(1),
    border: '1px solid #ECF0F6',
    '&:hover': {
      cursor: ({ enableInput }) => (!enableInput ? 'pointer' : 'auto'),
      '& textarea': {
        cursor: ({ enableInput }) => (!enableInput ? 'pointer' : 'auto'),
      },
    },
  },
  icons: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3),
  },
  footerContainer: {
    display: 'flex',
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
