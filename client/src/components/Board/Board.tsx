import { FC, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Column } from '../../interface/Column';
import BoardColumn from '../BoardColumn/BoardColumn';
import useStyles from './useStyles';

interface BoardProps {
  columns: Column[];
}
const Board: FC<BoardProps> = ({ columns }): JSX.Element => {
  const [board, setBoard] = useState(columns);
  const classes = useStyles();

  const handleOnDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const start: any = board.find((e) => e.id === source.droppableId);
    const finish: any = board.find((e) => e.id === destination.droppableId);
    if (start.id === finish.id) {
      const [newArrangement] = start.cards.splice(source.index, 1);
      start.cards.splice(destination.index, 0, newArrangement);
      // console.log(start.cards);
      // setBoard(columns => [...columns, ]);
      return;
    }
    console.log('Diffrent Column');
    // const itemsArrangement = Array.from(board)
    // const [newItemArrangement] = itemsArrangement.splice(result.source.index, 1)
    // itemsArrangement.splice(result.destination.index, 0, newItemArrangement)
    const [newArrangement] = start.cards.splice(source.index, 1);
    finish.cards.splice(destination.index, 0, newArrangement);
    // setBoard(itemsArrangement)
    console.log(start);
    console.log(result);
  };

  return (
    <div>
      <h1>Board</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div className={classes.board}>
          {board.map((column, index) => (
            <BoardColumn key={index} column={column.cards} droppableId={column.id} title={column.title} />
          ))}
        </div>
      </DragDropContext>
      <p className="copyright">copyright robert 2021</p>
    </div>
  );
};

export default Board;
