import { FC, useState } from 'react';
import useStyles from './useStyles';
import ColorBadge from './ColorBadge';
import { Box, useTheme } from '@material-ui/core';
import { ColorTags } from '../../interface/Column';

interface BadgePaletteProps {
  dohandleSetColor: (color: ColorTags) => void;
}

const BadgePalette: FC<BadgePaletteProps> = ({ dohandleSetColor }): JSX.Element => {
  const [checkedBadge, setCheckedBadge] = useState<ColorTags>('');
  const theme = useTheme();
  const classes = useStyles();
  const onSelectBadge = (color: ColorTags) => {
    dohandleSetColor(color);
    setCheckedBadge(color);
  };
  return (
    <Box className={classes.badgesContainer}>
      <ColorBadge
        id="green"
        color={theme.palette.greenTag.main}
        checked={checkedBadge}
        onClick={() => onSelectBadge('green')}
      />
      <ColorBadge
        id="red"
        color={theme.palette.redTag.main}
        checked={checkedBadge}
        onClick={() => onSelectBadge('red')}
      />
      <ColorBadge
        id="yellow"
        color={theme.palette.yellowTag.main}
        checked={checkedBadge}
        onClick={() => onSelectBadge('yellow')}
      />
      <ColorBadge
        id="blue"
        color={theme.palette.blueTag.main}
        checked={checkedBadge}
        onClick={() => onSelectBadge('blue')}
      />
    </Box>
  );
};

export default BadgePalette;
