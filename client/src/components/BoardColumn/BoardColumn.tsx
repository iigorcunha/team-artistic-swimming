import Typography from '@material-ui/core/Typography';
import { FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { Card } from '../../interface/Board';
import BoardCard from '../Card/Card';
import NewCardForm from '../NewCardForm/NewCardForm';
import useStyles from './useStyles';

interface ColumnProps {
  column: Card[];
  droppableId: string;
  name: string;
  index: number;
}

const BoardColumn: FC<ColumnProps> = ({ column, droppableId, name, index }): JSX.Element => {
  const classes = useStyles();
  return (
    <Draggable draggableId={droppableId} index={index}>
      {(provided) => (
        <div className={classes.columnContainer} {...provided.draggableProps} ref={provided.innerRef}>
          <Typography className={classes.columnTitle} {...provided.dragHandleProps}>
            {name}
          </Typography>
          <Droppable droppableId={droppableId} type="card">
            {(provided) => (
              <ul className={classes.column} {...provided.droppableProps} ref={provided.innerRef}>
                {column.map((e, index) => (
                  <BoardCard key={e._id} card={e} index={index} />
                ))}
                {provided.placeholder}
                <NewCardForm columnId={droppableId} />
              </ul>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default BoardColumn;
