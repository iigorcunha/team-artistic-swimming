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
  labelText: {
    fontWeight: 'bold',
  },
  icons: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3),
  },
  tagsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  tag: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    position: 'relative',
  },
  tagCloseButton: {
    position: 'absolute',
    top: theme.spacing(-1),
    right: theme.spacing(-1),
    fontSize: theme.spacing(2),
    width: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    padding: 0,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      filter: 'brightness(0.9)',
    },
  },
  tagText: {
    fontSize: theme.spacing(2),
    color: 'white',
  },
}));

export { useStyles };
