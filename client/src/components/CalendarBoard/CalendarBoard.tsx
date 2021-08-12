import React, { useEffect, useState, useRef } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import useStyles from './useStyles';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
//import 'react-big-calendar/lib/css/react-big-calendar.css'; // Default css by react-big-calendar dev team
import './customizedReactBigCalendar.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar as any);

import { Badge, MonthTitle } from './Badge';

interface EventResizeProps {
  start: any;
  end: any;
}

interface MoveEventProps {
  event: any;
  start: any;
  end: any;
}

import { DemoUserScheduleProps, DemoUserData } from './DemoUserEvent';

const CalendarBoard = (): JSX.Element => {
  const classes = useStyles();
  //const [events, setEvent] = useState<IUserSchedule[]>(mockDatas);
  const [events, setEvents] = useState<DemoUserScheduleProps[]>(DemoUserData);

  /*
  const [events, setEvents] = useState({
    start: moment().toDate(),
    end: moment().add(1, 'days').toDate(),
    title: 'Some title',0
  });
  */
  const onEventResize = ({ start, end }: EventResizeProps): void => {
    /*setEvents( ( {start: any, end: any }: any) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: [...state.events] };
    });
    */
  };

  const moveEvent = ({ event, start, end }: MoveEventProps): void => {
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);
  };

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log('current target');
  };

  const showEventDoubleClick = (): void => {
    //console.log('Event after double click');
  };

  const showEventSelected = (event: any): void => {
    //console.log('Here show event details after event selection');
    //console.log(event);
    const idx = events.indexOf(event);
    //console.log(idx);
    //setAnchorEl(event.currentTarget);
  };

  const showSelectedSlot = (event: any): void => {
    console.log('Slot selected:');
    //console.log(event);
    //console.log(event.box);
  };

  /*
  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.state;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents
    });
  };
  */

  return (
    <Grid container component="main" className={classes.root}>
      <DnDCalendar
        className={classes.calendarWrapper}
        //defaultDate={moment().toDate()}
        defaultDate={new Date(2020, 0, 1)}
        defaultView={'month'}
        events={events}
        localizer={localizer}
        onEventDrop={moveEvent}
        //onEventResize={onEventResize}
        timeslots={2}
        onDoubleClickEvent={showEventDoubleClick}
        onSelectEvent={showEventSelected}
        onSelectSlot={showSelectedSlot}
        popup={true}
        selectable
        resizable
        components={{ event: Badge, toolbar: MonthTitle }}
      />
    </Grid>
  );
};

export default CalendarBoard;
