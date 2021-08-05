import { FC, useState } from 'react';
import useStyles from './useStyles';
import ColorBadge from './ColorBadge';
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
      <ColorBadge color="#5ACD76" checked={checkedBadge} onClick={() => onSelectBadge('green')} />
      <ColorBadge color="#FF5D48" checked={checkedBadge} onClick={() => onSelectBadge('red')} />
      <ColorBadge color="#EDAB1D" checked={checkedBadge} onClick={() => onSelectBadge('yellow')} />
      <ColorBadge color="#59B0FF" checked={checkedBadge} onClick={() => onSelectBadge('blue')} />
    </Box>
  );
};

export default BadgePalette;
