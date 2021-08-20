import { makeStyles, Theme } from '@material-ui/core/styles';

interface BoardColumnStyleProps {
  editColumn: boolean;
}

const useStyles = makeStyles<Theme, BoardColumnStyleProps>((theme) => ({
  columnContainer: {
    marginLeft: 10,
  },
  column: {
    listStyleType: 'none',
    width: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    padding: 0,
    margin: 0,
    marginBottom: theme.spacing(5),
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
  },
  columnTitleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.secondary.main,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    width: 250,
  },
  columnTitle: {
    padding: 10,
    outline: 'none',
    fontWeight: 'bold',
    margin: theme.spacing(1),
    height: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    border: ({ editColumn }) => (editColumn ? `1px solid ${theme.palette.primary.main}` : '1px solid transparent'),
    backgroundColor: ({ editColumn }) => (editColumn ? 'white' : theme.palette.secondary.main),
    '& .MuiInputBase-input.MuiInput-input.Mui-disabled': {
      color: 'black',
    },
  },
  pointer: {
    '&:hover': {
      cursor: 'pointer',
    },
    '&:focus': {
      cursor: 'text',
    },
  },
  deleteButton: {
    padding: theme.spacing(1),
    fontSize: theme.spacing(2),
  },
}));

export default useStyles;
