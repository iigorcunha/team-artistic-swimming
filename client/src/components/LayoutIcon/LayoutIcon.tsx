import React from 'react';
import { Icon } from '@material-ui/core';
import IconImage from '../../Images/layoutIcon.svg';
import useStyles from './useStyles';

const LayoutIcon = (): JSX.Element => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Icon>
        <img src={IconImage} className={classes.root} />
      </Icon>
    </React.Fragment>
  );
};

export default LayoutIcon;
