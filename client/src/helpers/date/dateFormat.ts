import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export function dateFormat(date: Date): string {
  return dayjs.utc(date).local().format('DD MMM YY @ hh:mm a');
}

export function dateFormatLocal(date: string): string {
  return dayjs(date).local().format();
}
