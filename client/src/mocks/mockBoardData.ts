import { Card, Column } from '../interface/Board';

const column1: Card[] = [
  {
    _id: 'christy',
    name: 'Essay on the environment',
    colorCode: 'green',
    board: 'someId',
  },
];

const column2: Card[] = [
  {
    _id: 'lisa',
    name: 'Midterm exam',
    colorCode: 'red',
    board: 'someId',
  },
  {
    _id: 'john',
    name: 'Practice exam',
    colorCode: 'red',
    board: 'someId',
  },
];

const column3: Card[] = [
  {
    _id: 'gammy',
    name: 'Homework',
    colorCode: 'red',
    board: 'someId',
  },
];

const column4: Card[] = [
  {
    _id: 'judith',
    name: 'Workshop',
    colorCode: 'yellow',
    board: 'someId',
  },
  {
    _id: 'ferguson',
    name: 'Practice exam',
    colorCode: 'red',
    board: 'someId',
  },
  {
    _id: 'pauly',
    name: 'Research',
    colorCode: 'green',
    board: 'someId',
  },
];
export const columns: Column[] = [
  { cards: column1, _id: 'column1', name: 'Philosophy' },
  { cards: column2, _id: 'column2', name: 'Math' },
  { cards: column3, _id: 'column3', name: 'In Progress' },
  { cards: column4, _id: 'column4', name: 'Completed' },
];
