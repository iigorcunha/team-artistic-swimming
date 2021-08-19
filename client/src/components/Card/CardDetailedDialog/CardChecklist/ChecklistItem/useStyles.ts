import { makeStyles, Theme } from '@material-ui/core';

interface ChecklistItemStyleProps {
  itemDone: boolean;
  editableItem: boolean;
}

const useStyles = makeStyles<Theme, ChecklistItemStyleProps>((theme) => ({
  checklistContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: ({ editableItem }) => (editableItem ? 'white' : theme.palette.secondary.main),
    margin: theme.spacing(1),
  },
  icons: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3),
  },
  button: {
    marginRight: theme.spacing(2),
    width: theme.spacing(18),
    borderRadius: theme.spacing(1),
    color: '#FFFFFF',
    fontSize: theme.spacing(2),
    fontWeight: theme.typography.fontWeightMedium,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      filter: 'brightness(0.9)',
    },
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    alignItems: ({ editableItem }) => (editableItem ? 'flex-start' : 'center'),
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: ({ editableItem }) => (editableItem ? 'column' : 'row'),
    width: '100%',
    alignItems: ({ editableItem }) => (editableItem ? 'flex-start' : 'center'),
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    border: ({ editableItem }) => (editableItem ? '1px solid #d9d9d9' : '1px solid transparent'),
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    textDecoration: ({ itemDone, editableItem }) => (itemDone && !editableItem ? 'line-through' : 'none'),
  },
  tagFormContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  editIcon: {
    fontSize: theme.spacing(2),
    padding: theme.spacing(1),
  },
  editFooter: {
    marginLeft: theme.spacing(5),
  },
  deleteIcon: {
    fontSize: theme.spacing(2),
    color: 'red',
    padding: theme.spacing(1),
  },
  submitButton: {
    color: 'white',
  },
}));

export { useStyles };
