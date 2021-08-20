import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import enCA from 'date-fns/locale/en-CA';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import useStyles from './useStyles';

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import './customizedReactBigCalendar.css';

const locales = {
  'en-CA': enCA,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const DnDCalendar = withDragAndDrop(Calendar as any);

import { Badge, MonthTitle } from './Badge';

interface MoveEventProps {
  event: any;
  start: any;
  end: any;
}

import { useCard } from '../../context/useCardContext';
import { CalendarCards } from '../../interface/Board';
import { CardDetailedDialog } from '../Card/CardDetailedDialog/CardDetailedDialog';
import { useDialog } from '../../context/useDialogContext';
import { useCalendar } from '../../context/useCalendarContext';

const CalendarBoard = (): JSX.Element => {
  const classes = useStyles();

  const { currentMonth, handleMonth } = useCalendar();
  const { calendarCards, updateCard, listCalendarCards } = useCard();
  const [events, setEvents] = useState<CalendarCards[]>([]);

  useEffect(() => {
    setEvents(calendarCards);
  }, [calendarCards]);

  const moveEvent = ({ event, start, end }: MoveEventProps): void => {
    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    updateCard({ _id: event._id, deadline: String(end) });

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    setEvents(nextEvents);
  };

  const { getCard, card: selectedCard, isFetching } = useCard();

  const { handleDialog, openedDialog, onClose } = useDialog();

  async function handleDetailedCard(event: any): Promise<void> {
    if (event._id) {
      getCard(event._id);

      handleDialog(event._id);
    }
  }

  async function handleCloseDialog(): Promise<void> {
    listCalendarCards(currentMonth);
    onClose();
  }

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <DnDCalendar
          className={classes.calendarWrapper}
          defaultView={'month'}
          views={['week', 'month']}
          date={currentMonth}
          events={events}
          localizer={localizer}
          onEventDrop={moveEvent}
          timeslots={2}
          onNavigate={(event) => console.log(event)}
          resizable
          onDoubleClickEvent={(event) => handleDetailedCard(event)}
          components={{ event: Badge, toolbar: MonthTitle }}
        />
      </Grid>
      {!!selectedCard && !isFetching && (
        <CardDetailedDialog open={openedDialog === selectedCard._id} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default CalendarBoard;
