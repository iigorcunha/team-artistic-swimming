import { FC } from 'react';
import useStyles from './useStyles';

interface CardBadgeProps {
  color: string;
}
const CardBadge: FC<CardBadgeProps> = ({ color }): JSX.Element => {
  const mapColor = (color: string): string => {
    let hexValue = '';
    if (color == 'red') hexValue = '#FF5D48';
    if (color == 'blue') hexValue = '#59B0FF';
    if (color == 'yellow') hexValue = '#EDAB1D';
    if (color == 'green') hexValue = '#5ACD76';
    return hexValue;
  };
  const classes = useStyles();
  return <div className={classes.badge} style={{ backgroundColor: `${mapColor(color)}` }}></div>;
};

export default CardBadge;
