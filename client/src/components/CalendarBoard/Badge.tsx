import React from 'react';
import { Event, EventProps } from 'react-big-calendar';
import { Typography } from '@material-ui/core';

export const Badge: React.FC<EventProps<Event>> = ({ event }): JSX.Element => {
  return (
    <div className="rbc-event-content">
      <div className="rbc-event-color" style={{ backgroundColor: event.resource }}></div>
      <Typography className="rbc-event-label">{event.title}</Typography>
    </div>
  );
};
