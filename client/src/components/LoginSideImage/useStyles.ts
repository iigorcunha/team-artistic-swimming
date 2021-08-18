import { makeStyles } from '@material-ui/core/styles';
import loginImage from '../../Images/loginImage.png';

const useStyles = makeStyles(() => ({
  loginImage: {
    backgroundImage: `url(${loginImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    paddingRight: 0,
    marginRight: 0,
  },
}));

export default useStyles;
