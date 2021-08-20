import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '30px',
  },
  avatarContainer: {
    width: '30vw',
    margin: 'auto',
    padding: '5px',
    border: 'none',
    boxShadow: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    height: '30vh',
  },
  photoAvatar: {
    textAlign: 'center',
    width: '140px',
    height: '140px',
    display: 'block',
    border: '0.4px solid gray',
    marginBottom: 10,
  },
  photoButton: {
    padding: 15,
    fontWeight: 700,
    marginBottom: 10,
  },
  photoLabel: {
    padding: 15,
    fontWeight: 700,
    border: '0.5px blue solid',
    borderRadius: '4px',
    marginBottom: 10,
  },
  photoInput: {
    padding: 15,
    fontWeight: 700,
    color: 'red',
    border: '0.5px red solid',
    display: 'none',
    marginBottom: 10,
  },
}));

export default useStyles;
