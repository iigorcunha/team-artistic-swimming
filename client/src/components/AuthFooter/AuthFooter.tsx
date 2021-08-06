import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { Typography } from '@material-ui/core';

interface Props {
  linkTo: string;
  asideText: string;
  btnText: string;
  btnDemo: string;
}

const AuthFooter = ({ linkTo, asideText, btnText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} className={classes.authFooter}>
      <Typography className={classes.accAside}>{asideText}</Typography>
      <Box>
        <Link to={linkTo} className={classes.link}>
          <Button color="inherit" className={classes.accLabel}>
            {btnText}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default AuthFooter;
