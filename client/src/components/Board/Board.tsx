import { FC, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Column } from '../../interface/Column';
import BoardColumn from '../BoardColumn/BoardColumn';
import AddColumnWidget from '../AddColumnWidget/AddColumnWidget';
import useStyles from './useStyles';
import { Grid, Box } from '@material-ui/core';

interface BoardProps {
  columns: Column[];
}
const Board: FC<BoardProps> = ({ columns }): JSX.Element => {
  const [board, setBoard] = useState(columns);
  const [showingWidgetLeft, setShowingWidgetLeft] = useState(false);
  const [showingWidgetRight, setShowingWidgetRight] = useState(false);
  const classes = useStyles();

  const handleOnDragEnd = (result: any) => {
    setShowingWidgetLeft(false);
    setShowingWidgetRight(false);
    const { destination, source } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if (destination.droppableId === 'addColumnLeft' || destination.droppableId === 'addColumnRight') {
      console.log('Adding');
      return;
    }
    if (result.type === 'column') {
      const columnArrangement = Array.from(board);
      const [draggedColumn] = columnArrangement.splice(source.index, 1);
      columnArrangement.splice(destination.index, 0, draggedColumn);
      setBoard(columnArrangement);
      return;
    }
    const start: any = board.find((e) => e.id === source.droppableId);
    const finish: any = board.find((e) => e.id === destination.droppableId);
    if (start.id === finish.id) {
      const [draggedCard] = start.cards.splice(source.index, 1);
      start.cards.splice(destination.index, 0, draggedCard);
      return;
    }
    const [draggedCard] = start.cards.splice(source.index, 1);
    finish.cards.splice(destination.index, 0, draggedCard);
    return;
  };

  const handleOnDragUpdate = (update: any) => {
    if (!update.destination) return;
    if (update.destination.droppableId === 'addColumnLeft') {
      setShowingWidgetLeft(true);
      setShowingWidgetRight(false);
      return;
    }
    if (update.destination.droppableId === 'addColumnRight') {
      setShowingWidgetRight(true);
      setShowingWidgetLeft(false);
      return;
    }
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd} onDragUpdate={handleOnDragUpdate}>
        <Droppable droppableId="allColumns" direction="horizontal" type="column">
          {(provided) => (
            <div className={classes.board} {...provided.droppableProps} ref={provided.innerRef}>
              <AddColumnWidget droppableId="addColumnLeft" showing={showingWidgetLeft} />
              <Grid container>
                {board.map((column, index) => (
                  <Box key={column.id}>
                    <BoardColumn column={column.cards} droppableId={column.id} title={column.title} index={index} />
                  </Box>
                ))}
              </Grid>
              <AddColumnWidget droppableId="addColumnRight" showing={showingWidgetRight} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Board;
