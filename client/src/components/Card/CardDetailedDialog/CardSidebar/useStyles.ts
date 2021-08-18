import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  sidebarCard: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    width: '15%',
  },
  sidebarSectionName: {
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
  },
}));

export { useStyles };
