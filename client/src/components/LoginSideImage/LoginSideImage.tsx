import Box from '@material-ui/core/Box';
import useStyles from './useStyles';

const LoginSideImage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box>
      <div className={classes.loginImage}></div>
    </Box>
  );
};

export default LoginSideImage;
