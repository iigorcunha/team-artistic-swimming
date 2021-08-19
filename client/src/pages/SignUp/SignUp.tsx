import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { FormikHelpers } from 'formik';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import LoginSideImage from '../../components/LoginSideImage/LoginSideImage';
import { SignUpFormData } from '../../interface/Auth';

interface Props {
  handleDemoLogin: ({ demoUser, email, password }: { demoUser: boolean; email: string; password: string }) => void;
}

export default function Register({ handleDemoLogin }: Props): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const handleSubmit = (
    { username, email, password }: SignUpFormData,
    { setSubmitting }: FormikHelpers<SignUpFormData>,
  ) => {
    register(username, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error });
        setSubmitting(false);
        updateSnackBarMessage(data.error);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={12} md={12} elevation={6} component={Paper} square>
        <Box className={classes.authWrapper}>
          <Box width="100%" alignSelf="center">
            <Grid container>
              <Grid className={classes.leftSectionWrapper}>
                <LoginSideImage />
              </Grid>
              <Grid className={classes.rightSectionWrapper}>
                <div style={{ height: 120 }} />
                <Box className={classes.loginWrapper}>
                  <Typography className={classes.welcome} component="h1" variant="h5">
                    Sign up to Kanban
                  </Typography>
                  <SignUpForm handleSubmit={handleSubmit} handleDemoLogin={handleDemoLogin} />
                </Box>
                <Box borderTop={1} borderColor="grey.200">
                  <AuthFooter linkTo="/login" asideText="Already have an account?" btnText="Login" btnDemo="Demo" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
