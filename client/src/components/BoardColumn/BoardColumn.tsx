import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Card } from '../../interface/Column';
import BoardCard from '../Card/Card';
import useStyles from './useStyles';

interface ColumnProps {
  column: Card[];
  droppableId: string;
  title: string;
  index: number;
}

const BoardColumn: FC<ColumnProps> = ({ column, droppableId, title, index }): JSX.Element => {
  const classes = useStyles();
  return (
    <Draggable draggableId={droppableId} index={index}>
      {(provided) => (
        <div className={classes.columnContainer} {...provided.draggableProps} ref={provided.innerRef}>
          <Typography className={classes.columnTitle} {...provided.dragHandleProps}>
            {title}
          </Typography>
          <Droppable droppableId={droppableId} type="card">
            {(provided) => (
              <ul className={classes.column} {...provided.droppableProps} ref={provided.innerRef}>
                {column.map((e, index) => (
                  <BoardCard key={e.id} card={e} index={index} />
                ))}
                {provided.placeholder}
                <Button color="primary">Add a card</Button>
              </ul>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default BoardColumn;
