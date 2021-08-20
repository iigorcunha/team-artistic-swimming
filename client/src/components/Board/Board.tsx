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
  const { board, updateBoard } = useBoard();
  const { backdropOpen } = useBackdrop();
  const [openNewColumnDialog, setOpenNewColumnDialog] = useState<boolean>(false);
  const [showingWidgetLeft, setShowingWidgetLeft] = useState<boolean>(false);
  const [showingWidgetRight, setShowingWidgetRight] = useState<boolean>(false);
  const [newColumnDetails, setNewColumnDetails] = useState({});
  const classes = useStyles();

  const handleOnDragEnd = (result: DropResult) => {
    if (board.columns) {
      setShowingWidgetLeft(false);
      setShowingWidgetRight(false);
      const { destination, source } = result;
      if (!destination) return;
      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }
      if (destination.droppableId === 'addColumnLeft' || destination.droppableId === 'addColumnRight') {
        const boardArrangement = Array.from(board.columns);
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
        const modifiedBoard = Array.from(board.columns);
        const [draggedColumn] = modifiedBoard.splice(source.index, 1);
        modifiedBoard.splice(destination.index, 0, draggedColumn);
        updateBoard(modifiedBoard);
        return;
      }
      const start: Column | undefined = board.columns.find((e) => e._id === source.droppableId);
      const finish: Column | undefined = board.columns.find((e) => e._id === destination.droppableId);
      if (start && finish) {
        if (start._id === finish._id) {
          const [draggedCard] = start.cards.splice(source.index, 1);
          start.cards.splice(destination.index, 0, draggedCard);
          updateBoard(board.columns);
          return;
        }
        const [draggedCard] = start.cards.splice(source.index, 1);
        finish.cards.splice(destination.index, 0, draggedCard);
        updateBoard(board.columns);
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
                {board.columns &&
                  board.columns.map(
                    (column, index) =>
                      column._id && (
                        <Box key={column._id}>
                          <BoardColumn
                            column={column.cards}
                            droppableId={column._id}
                            name={column.name}
                            index={index}
                          />
                        </Box>
                      ),
                  )}
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
