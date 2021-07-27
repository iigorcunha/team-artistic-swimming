import { Card, Column } from '../interface/Column';

const column1: Card[] = [
  {
    id: 'joe',
    name: 'Big joe',
    image: 'https://picsum.photos/id/237/200/300',
  },
  {
    id: 'schnider',
    name: 'Ron Schnider',
    image: 'https://picsum.photos/id/227/200/300',
  },
  {
    id: 'carlo',
    name: 'Monte Carlo',
    image: 'https://picsum.photos/id/137/200/300',
  },
  {
    id: 'nimb',
    name: 'George Nimb',
    image: 'https://picsum.photos/id/234/200/300',
  },
  {
    id: 'piper',
    name: 'Rick Piper',
    image: 'https://picsum.photos/id/231/200/300',
  },
];

const column2: Card[] = [
  {
    id: 'graham',
    name: 'Frank Graham',
    image: 'https://picsum.photos/id/209/200/300',
  },
  {
    id: 'czar',
    name: 'Fatai Czar',
    image: 'https://picsum.photos/id/221/200/300',
  },
  {
    id: 'philip',
    name: 'Mark Philip',
    image: 'https://picsum.photos/id/130/200/300',
  },
  {
    id: 'john',
    name: 'Neal John',
    image: 'https://picsum.photos/id/214/200/300',
  },
  {
    id: 'valentina',
    name: 'Van Valentina',
    image: 'https://picsum.photos/id/201/200/300',
  },
];
export const columns: Column[] = [
  { cards: column1, id: 'column1' },
  { cards: column2, id: 'column2' },
];
