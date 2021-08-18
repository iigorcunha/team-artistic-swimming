import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  sectionContent: {
    display: 'flex',
    width: '100%',
    marginLeft: theme.spacing(2),
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '100%',
    alignItems: 'flex-start',
    display: 'flex',
    justifyContent: 'space-between',
  },
  sectionLabelText: {
    fontWeight: 'bold',
  },
  checklistContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  icons: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3),
  },
  linkText: {
    fontSize: theme.spacing(2),
    textDecoration: 'underline',
    margin: theme.spacing(2),
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
  tagFormContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  inputChecklist: {
    width: '100%',
  },
  tagHeader: {
    fontSize: theme.spacing(2),
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
  },
  deleteButton: {
    fontSize: theme.spacing(2),
    padding: theme.spacing(1),
  },
  tagForm: {
    display: 'flex',
    width: '100%',
  },
  addItemContainer: {
    width: '100%',
  },
  addButton: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      filter: 'brightness(0.95)',
    },
  },
  submitButton: {
    marginTop: theme.spacing(3),
    color: 'white',
  },
}));

export { useStyles };
