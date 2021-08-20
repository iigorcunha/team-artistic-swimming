import { sub, add } from 'date-fns';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function dateFormat(date: Date): string {
  return dayjs.utc(date).local().format('DD MMM YY @ hh:mm a');
}

export function dateFormatLocal(date: string): string {
  return dayjs(date).local().format();
}

export function subtractMonths(date: Date, months: number): Date {
  return sub(new Date(date), { months });
}

export function addMonths(date: Date, months: number): Date {
  return add(new Date(date), { months });
}
