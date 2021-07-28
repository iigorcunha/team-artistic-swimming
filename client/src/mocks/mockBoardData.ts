import { Card, Column } from '../interface/Column';

const column1: Card[] = [
  {
    id: 'joe',
    name: 'Big joe',
    color: 'yellow',
  },
  {
    id: 'schnider',
    name: 'Ron Schnider',
    color: 'red',
  },
  {
    id: 'nimb',
    name: 'George Nimb',
    color: 'yellow',
  },
  {
    id: 'piper',
    name: 'Rick Piper',
    color: 'green',
  },
];

const column2: Card[] = [
  {
    id: 'philip',
    name: 'Mark Philip',
    color: 'green',
  },
  {
    id: 'john',
    name: 'Neal John',
    color: 'yellow',
  },
  {
    id: 'valentina',
    name: 'Van Valentina',
    color: 'green',
  },
];

const column3: Card[] = [
  {
    id: 'gammy',
    name: "O'Neal Gammy",
    color: 'green',
  },
  {
    id: 'greene',
    name: 'Ralph Greene',
    color: 'red',
  },
];
export const columns: Column[] = [
  { cards: column1, id: 'column1', title: 'Todo' },
  { cards: column2, id: 'column2', title: 'In Progress' },
  { cards: column3, id: 'column3', title: 'Done' },
];
