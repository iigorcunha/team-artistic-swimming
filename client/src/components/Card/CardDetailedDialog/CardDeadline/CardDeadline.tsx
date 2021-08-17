import { Link } from '@material-ui/core';
import { Box, Icon, Typography } from '@material-ui/core';
import { FiClock } from 'react-icons/fi';
import { useCard } from '../../../../context/useCardContext';
import { dateFormat } from '../../../../helpers/date/dateFormat';
import { useStyles } from './useStyles';

interface CardDeadlineProps {
  deadline: Date;
}

const CardDeadline: React.FC<CardDeadlineProps> = ({ deadline }) => {
  const classes = useStyles();
  return (
    <Box className={classes.inputContainer}>
      <Icon className={classes.icons}>
        <FiClock />
      </Icon>
      <Box className={classes.inputContent}>
        <Typography className={classes.inputLabelText} variant="h6">
          Deadline:
        </Typography>
        <Link className={classes.linkText}>{dateFormat(deadline)}</Link>
      </Box>
    </Box>
  );
};

export { CardDeadline };
