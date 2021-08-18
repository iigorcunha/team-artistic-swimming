import { Button, ButtonProps } from '@material-ui/core';
import useStyles from './useStyles';

interface CardSidebarButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CardSidebarButton: React.FC<CardSidebarButtonProps> = ({ children, ...rest }): JSX.Element => {
  const classes = useStyles();
  return (
    <Button className={classes.sidebarCardButtons} variant="contained" disableElevation color="secondary" {...rest}>
      {children}
    </Button>
  );
};

export { CardSidebarButton };
