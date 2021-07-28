import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Card } from '../../interface/Column';
import BoardCard from '../Card/Card';
import useStyles from './useStyles';

interface ColumnProps {
  column: Card[];
  droppableId: string;
  title: string;
}

const BoardColumn: FC<ColumnProps> = ({ column, droppableId, title }): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.columnContainer}>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <ul className={classes.column} {...provided.droppableProps} ref={provided.innerRef}>
            <Typography className={classes.columnTitle} color="textSecondary">
              {title}
            </Typography>
            {column.map((e, index) => (
              <BoardCard key={e.id} card={e} index={index} />
            ))}
            {provided.placeholder}
            <Button color="primary">Add a card</Button>
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default BoardColumn;
