export interface Card {
  id: string;
  name: string;
  image: string;
}

export const column: Card[] = [
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
