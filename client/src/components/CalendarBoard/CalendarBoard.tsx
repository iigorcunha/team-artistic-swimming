import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import useStyles from './useStyles';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import './customizedReactBigCalendar.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar as any);

import { Badge, MonthTitle } from './Badge';

interface MoveEventProps {
  event: any;
  start: any;
  end: any;
}

import { DemoUserScheduleProps, DemoUserData } from './DemoUserEvent';

const CalendarBoard = (): JSX.Element => {
  const classes = useStyles();
  const [events, setEvents] = useState<DemoUserScheduleProps[]>(DemoUserData);

  const moveEvent = ({ event, start, end }: MoveEventProps): void => {
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <DnDCalendar
        className={classes.calendarWrapper}
        defaultDate={new Date(2020, 0, 1)}
        defaultView={'month'}
        events={events}
        localizer={localizer}
        onEventDrop={moveEvent}
        timeslots={2}
        popup={true}
        selectable
        resizable
        components={{ event: Badge, toolbar: MonthTitle }}
      />
    </Grid>
  );
};

export default CalendarBoard;
