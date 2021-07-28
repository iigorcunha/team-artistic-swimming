import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card } from '../../interface/Column';
import CardBadge from '../CardBadge/CardBadge';
import useStyles from './useStyles';

interface CardProps {
  card: Card;
  index: number;
}

const BoardCard: FC<CardProps> = ({ card, index }): JSX.Element => {
  const classes = useStyles();
  return (
    <div>
      <Draggable key={card.id} draggableId={card.id} index={index}>
        {(provided) => (
          <li
            className={classes.card}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <CardBadge color={card.color}/>
            <p>{card.name}</p>
          </li>
        )}
      </Draggable>
    </div>
  );
};

export default BoardCard;
