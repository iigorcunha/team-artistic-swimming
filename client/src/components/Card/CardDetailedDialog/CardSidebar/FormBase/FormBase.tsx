import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import useStyles from './useStyles';

interface FormBaseProps {
  formTitle: string;
}

const FormBase: React.FC<FormBaseProps> = ({ children, formTitle }) => {
  const classes = useStyles();

  return (
    <Box className={classes.formContainer}>
      <Typography className={classes.formHeader}>{formTitle}</Typography>
      {children}
    </Box>
  );
};

export { FormBase };
