import React from 'react';
import { Event, EventProps, ToolbarProps } from 'react-big-calendar';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IconButton } from '@material-ui/core';
import useStyles from './useStyles';
import { useCalendar } from '../../context/useCalendarContext';
import { addMonths, subtractMonths } from '../../helpers/date/dateFormat';

export const Badge: React.FC<EventProps<Event>> = ({ event }): JSX.Element => {
  return (
    <div className="rbc-event-content">
      <div className="rbc-event-color" style={{ backgroundColor: event.resource }}></div>
      <strong style={{ fontSize: '16px' }} className="rbc-event-label">
        {event.title}
      </strong>
    </div>
  );
};

export const MonthTitle: React.FC<ToolbarProps> = ({ label }): JSX.Element => {
  const classes = useStyles();
  const { handleMonth, currentMonth } = useCalendar();
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <IconButton className={classes.toolbarButtons} onClick={() => handleMonth(subtractMonths(currentMonth, 1))}>
          <FiChevronLeft />
        </IconButton>
      </span>
      <span className="rbc-toolbar-label">{label}</span>
      <span className="rbc-btn-group">
        <IconButton className={classes.toolbarButtons} onClick={() => handleMonth(addMonths(currentMonth, 1))}>
          <FiChevronRight />
        </IconButton>
      </span>
    </div>
  );
};
