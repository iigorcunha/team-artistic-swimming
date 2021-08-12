import React, { useState, useRef } from 'react';
import { Event, EventProps, ToolbarProps } from 'react-big-calendar';
import { Typography } from '@material-ui/core';
import Popover from '@material-ui/core/Popover';

import useStyles from './useStyles';

export const Badge: React.FC<EventProps<Event>> = ({ event }): JSX.Element => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <div ref={divRef} onClick={handlePopoverOpen} className="rbc-event-content">
        <div className="rbc-event-color" style={{ backgroundColor: event.resource }}></div>
        <Typography className="rbc-event-label">{event.title}</Typography>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography className={classes.typography}>Task: {event.title} </Typography>
        <Typography className={classes.typography}>Description: here you can add a description </Typography>
      </Popover>
    </React.Fragment>
  );
};

export const MonthTitle: React.FC<ToolbarProps> = ({ label }): JSX.Element => {
  return (
    <div className="rbc-toolbar">
      <Typography variant="h4" className="rbc-toolbar-label">
        {label}
      </Typography>
    </div>
  );
};
