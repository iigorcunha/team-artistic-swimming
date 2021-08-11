import { FC, useState } from 'react';
import { DragDropContext, DragUpdate, Droppable, DropResult } from 'react-beautiful-dnd';
import BoardColumn from '../BoardColumn/BoardColumn';
import AddColumnWidget from '../AddColumnWidget/AddColumnWidget';
import useStyles from './useStyles';
import { Grid, Box, Backdrop, CircularProgress } from '@material-ui/core';
import NewColumnDialogBox from '../NewColumnDialogBox/NewColumnDialogBox';
import { useBoard } from '../../context/useBoardContext';
import { useBackdrop } from '../../context/useBackDropContext';
import { Column } from '../../interface/Board';

const Board: FC = (): JSX.Element => {
  const { boardColumns, updateBoard } = useBoard();
  const { backdropOpen } = useBackdrop();
  const [openNewColumnDialog, setOpenNewColumnDialog] = useState<boolean>(false);
  const [showingWidgetLeft, setShowingWidgetLeft] = useState<boolean>(false);
  const [showingWidgetRight, setShowingWidgetRight] = useState<boolean>(false);
  const [newColumnDetails, setNewColumnDetails] = useState({});
  const classes = useStyles();

  const handleOnDragEnd = (result: DropResult) => {
    if (boardColumns) {
      setShowingWidgetLeft(false);
      setShowingWidgetRight(false);
      const { destination, source } = result;
      if (!destination) return;
      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }
      if (destination.droppableId === 'addColumnLeft' || destination.droppableId === 'addColumnRight') {
        const boardArrangement = Array.from(boardColumns);
        const draggedCardColumn: Column | undefined = boardArrangement.find((e) => e._id === source.droppableId);
        if (draggedCardColumn) {
          const [draggedCard] = draggedCardColumn.cards.splice(source.index, 1);
          const details = {
            position: destination.droppableId === 'addColumnLeft' ? 'left' : 'right',
            boardArrangement,
            draggedCardColumn,
            draggedCard,
            draggedCardIndex: source.index,
          };
          setNewColumnDetails({ ...details });
          setOpenNewColumnDialog(true);
          return;
        }
      }
      if (result.type === 'column') {
        const columnArrangement = Array.from(boardColumns);
        const [draggedColumn] = columnArrangement.splice(source.index, 1);
        columnArrangement.splice(destination.index, 0, draggedColumn);
        updateBoard(columnArrangement);
        return;
      }
      const start: Column | undefined = boardColumns.find((e) => e._id === source.droppableId);
      const finish: Column | undefined = boardColumns.find((e) => e._id === destination.droppableId);
      if (start && finish) {
        if (start._id === finish._id) {
          const [draggedCard] = start.cards.splice(source.index, 1);
          start.cards.splice(destination.index, 0, draggedCard);
          updateBoard(boardColumns);
          return;
        }
        const [draggedCard] = start.cards.splice(source.index, 1);
        finish.cards.splice(destination.index, 0, draggedCard);
        updateBoard(boardColumns);
        return;
      }
    }
  };

  const handleOnDragUpdate = (update: DragUpdate) => {
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

  const handleCloseAddColumnDialog = () => {
    setOpenNewColumnDialog(false);
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd} onDragUpdate={handleOnDragUpdate}>
        <Droppable droppableId="allColumns" direction="horizontal" type="column">
          {(provided) => (
            <div className={classes.board} {...provided.droppableProps} ref={provided.innerRef}>
              <AddColumnWidget droppableId="addColumnLeft" showing={showingWidgetLeft} />
              <Grid container>
                {boardColumns
                  ? boardColumns.map((column, index) => (
                      <Box key={column._id}>
                        <BoardColumn column={column.cards} droppableId={column._id} name={column.name} index={index} />
                      </Box>
                    ))
                  : null}
              </Grid>
              <AddColumnWidget droppableId="addColumnRight" showing={showingWidgetRight} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <NewColumnDialogBox
        open={openNewColumnDialog}
        handleClose={handleCloseAddColumnDialog}
        details={newColumnDetails}
      />
      <Backdrop className={classes.backdrop} open={backdropOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Board;
