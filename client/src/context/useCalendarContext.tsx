import { useState, useContext, createContext } from 'react';

interface ICalendarContext {
  currentMonth: Date;
  handleMonth: (date: Date) => void;
}

export const CalendarContext = createContext<ICalendarContext>({} as ICalendarContext);

export const CalendarProvider: React.FC = ({ children }): JSX.Element => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  function handleMonth(date: Date) {
    setCurrentMonth(date);
  }

  return (
    <CalendarContext.Provider
      value={{
        currentMonth,
        handleMonth,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export function useCalendar(): ICalendarContext {
  return useContext(CalendarContext);
}
