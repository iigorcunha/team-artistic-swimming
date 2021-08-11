import { FC } from 'react';
import { ColorTags } from '../../interface/Board';
import useStyles from './useStyles';

interface CardBadgeProps {
  color: ColorTags;
}
const CardBadge: FC<CardBadgeProps> = ({ color }): JSX.Element => {
  const colors = {
    red: '#FF5D48',
    blue: '#59B0FF',
    yellow: '#EDAB1D',
    green: '#5ACD76',
    '': '',
  };
  const classes = useStyles();
  return <div className={classes.badge} style={{ backgroundColor: colors[color] }}></div>;
};

export default CardBadge;
