import { FC } from 'react';
import useStyles from './useStyles';

interface CardBadgeProps {
  color: string;
}

const CardBadge: FC<CardBadgeProps> = ({ color }): JSX.Element => {
  const classes = useStyles();
  return <div className={classes.badge} style={{ backgroundColor: color }}></div>;
};

export default CardBadge;
