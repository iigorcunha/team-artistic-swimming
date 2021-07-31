import { Card, Column } from '../interface/Column';

const column1: Card[] = [
  {
    id: 'christy',
    name: 'Essay on the environment',
    color: 'green',
    deadline: 'July 12',
  },
];

const column2: Card[] = [
  {
    id: 'lisa',
    name: 'Midterm exam',
    color: 'red',
    deadline: 'March 10',
  },
  {
    id: 'john',
    name: 'Practice exam',
    color: 'red',
  },
];

const column3: Card[] = [
  {
    id: 'gammy',
    name: 'Homework',
    color: 'red',
  },
];

const column4: Card[] = [
  {
    id: 'judith',
    name: 'Workshop',
    color: 'yellow',
  },
  {
    id: 'ferguson',
    name: 'Practice exam',
    color: 'red',
  },
  {
    id: 'pauly',
    name: 'Research',
    color: 'green',
    deadline: 'May 30',
  },
];
export const columns: Column[] = [
  { cards: column1, id: 'column1', title: 'Philosophy' },
  { cards: column2, id: 'column2', title: 'Math' },
  { cards: column3, id: 'column3', title: 'In Progress' },
  { cards: column4, id: 'column4', title: 'Completed' },
];
