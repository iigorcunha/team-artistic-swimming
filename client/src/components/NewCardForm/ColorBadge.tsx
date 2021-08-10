import { FC } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './useStyles';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

const StyledBadge = withStyles(() => ({
  badge: {
    right: -6,
    top: 8,
    border: `none`,
    padding: '8px 0',
  },
}))(Badge);

interface CustomizedBadgeProps {
  color: string;
  checked: string;
  onClick: () => void;
  id: string;
}

const CustomizedBadge: FC<CustomizedBadgeProps> = ({ color, checked, onClick, id }): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.badgeWrapper} style={{ backgroundColor: color }} onClick={onClick}>
      <StyledBadge badgeContent={checked === id ? <CheckRoundedIcon htmlColor="white" /> : null}>
        {'\u00A0'}
      </StyledBadge>
    </div>
  );
};

export default CustomizedBadge;
