import { FC, useState } from 'react';
import useStyles from './useStyles';
import CustomizedBadge from './ColorBadge';
import { Box } from '@material-ui/core';
import { ColorTags } from '../../interface/Column';

interface BadgePaletteProps {
  dohandleSetColor: (color: string) => void;
}

const BadgePalette: FC<BadgePaletteProps> = ({ dohandleSetColor }): JSX.Element => {
  const [checkedBadge, setCheckedBadge] = useState<ColorTags>('');
  const classes = useStyles();
  const onSelectBadge = (color: ColorTags) => {
    dohandleSetColor(color);
    setCheckedBadge(color);
  };
  return (
    <Box className={classes.badgesContainer}>
      <CustomizedBadge color="red" checked={checkedBadge} onClick={() => onSelectBadge('red')} />
      <CustomizedBadge color="blue" checked={checkedBadge} onClick={() => onSelectBadge('blue')} />
      <CustomizedBadge color="yellow" checked={checkedBadge} onClick={() => onSelectBadge('yellow')} />
      <CustomizedBadge color="green" checked={checkedBadge} onClick={() => onSelectBadge('green')} />
    </Box>
  );
};

export default BadgePalette;
