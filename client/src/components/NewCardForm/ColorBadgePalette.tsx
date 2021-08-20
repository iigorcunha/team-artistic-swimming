import { FC, useState } from 'react';
import useStyles from './useStyles';
import ColorBadge from './ColorBadge';
import { Box, useTheme } from '@material-ui/core';

interface BadgePaletteProps {
  dohandleSetColor: (color: string) => void;
}

const BadgePalette: FC<BadgePaletteProps> = ({ dohandleSetColor }): JSX.Element => {
  const [checkedBadge, setCheckedBadge] = useState('');
  const theme = useTheme();
  const classes = useStyles();
  const onSelectBadge = (color: string) => {
    dohandleSetColor(color);
    setCheckedBadge(color);
  };
  return (
    <Box className={classes.badgesContainer}>
      <ColorBadge
        id="#5ACD76"
        color={theme.palette.greenTag.main}
        checked={checkedBadge}
        onClick={() => onSelectBadge('#5ACD76')}
      />
      <ColorBadge
        id="#FF5D48"
        color={theme.palette.redTag.main}
        checked={checkedBadge}
        onClick={() => onSelectBadge('#FF5D48')}
      />
      <ColorBadge
        id="#EDAB1D"
        color={theme.palette.yellowTag.main}
        checked={checkedBadge}
        onClick={() => onSelectBadge('#EDAB1D')}
      />
      <ColorBadge
        id="#59B0FF"
        color={theme.palette.blueTag.main}
        checked={checkedBadge}
        onClick={() => onSelectBadge('#59B0FF')}
      />
    </Box>
  );
};

export { BadgePalette };
