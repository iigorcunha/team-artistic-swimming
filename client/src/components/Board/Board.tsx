import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { column } from '../../mocks/mockBoardData';

export default function Board(): JSX.Element {
  const handleOnDragEnd = () => {
    // if(!result.destination) return
    // const itemsArrangement = Array.from(characters)
    // const [newItemArrangement] = itemsArrangement.splice(result.source.index, 1)
    // itemsArrangement.splice(result.destination.index, 0, newItemArrangement)

    // setCharacters(itemsArrangement)
    console.log('draged');
  };

  return (
    <div>
      <h1>Board</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul className="items" {...provided.droppableProps} ref={provided.innerRef}>
              {column.map((e, index) => (
                <Draggable key={e.id} draggableId={e.id} index={index}>
                  {(provided) => (
                    <li
                      className="item"
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <img src={e.image} alt={e.name} />
                      <p>{e.name}</p>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <p className="copyright">copyright robert 2021</p>
    </div>
  );
}
