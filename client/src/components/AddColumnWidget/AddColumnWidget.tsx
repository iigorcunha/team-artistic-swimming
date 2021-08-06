import { FC } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import useStyles from './useStyles';
import { Droppable } from 'react-beautiful-dnd';

interface AddColumnWidgetProps {
  droppableId: string;
  showing: boolean;
}
const AddColumnWidget: FC<AddColumnWidgetProps> = ({ droppableId, showing }): JSX.Element => {
  const classes = useStyles();
  const widgetClass = showing ? classes.visibleWidget : classes.hiddenWidget;
  return (
    <div className={widgetClass}>
      <Droppable droppableId={droppableId} type="card">
        {(provided) => (
          <div className={classes.addColumnDroppableArea} {...provided.droppableProps} ref={provided.innerRef}>
            <AddCircleOutlineIcon className={classes.addCircleOutlineIcon} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default AddColumnWidget;
