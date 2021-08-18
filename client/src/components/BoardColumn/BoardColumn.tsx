import { Box, IconButton, Input } from '@material-ui/core';
import * as yup from 'yup';
import { Formik } from 'formik';
import { FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { usePopover } from '../../context/usePopoverContext';
import { Card } from '../../interface/Board';
import BoardCard from '../Card/Card';
import NewCardForm from '../NewCardForm/NewCardForm';
import { Popover } from '../Popover/Popover';
import { BoardColumnDelete } from './BoardColumnDelete/BoardColumnDelete';
import useStyles from './useStyles';
import { useBoard } from '../../context/useBoardContext';

interface ColumnProps {
  column: Card[];
  droppableId: string;
  name: string;
  index: number;
}

const BoardColumn: FC<ColumnProps> = ({ column, droppableId, name, index }): JSX.Element => {
  const { handleOpenPopover, handleClosePopover } = usePopover();
  const { editableColumn, handleEditColumn, updateColumn } = useBoard();

  const classes = useStyles({ editColumn: editableColumn === droppableId });

  return (
    <Draggable draggableId={droppableId} index={index}>
      {(provided) => (
        <div className={classes.columnContainer} {...provided.draggableProps} ref={provided.innerRef}>
          <Box className={classes.columnTitleContainer} {...provided.dragHandleProps}>
            <Formik
              enableReinitialize
              initialValues={{ name: name }}
              validationSchema={yup.object({
                name: yup.string().required('Column name is required.'),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);

                updateColumn({ _id: droppableId, name: values.name });

                handleEditColumn('closed');
              }}
            >
              {({ touched, errors, values, handleChange, submitForm }) => (
                <Input
                  autoFocus={editableColumn === droppableId}
                  id="name"
                  name="name"
                  value={values.name}
                  disabled={!(editableColumn === droppableId)}
                  disableUnderline
                  onChange={handleChange}
                  onKeyPress={(event) => event.key === 'Enter' && submitForm()}
                  className={classes.columnTitle}
                  error={touched.name && Boolean(errors.name)}
                  onBlur={() => handleEditColumn('closed')}
                />
              )}
            </Formik>

            <IconButton
              className={classes.deleteButton}
              onClick={() =>
                !(editableColumn === droppableId) ? handleEditColumn(droppableId) : handleEditColumn('closed')
              }
            >
              <FiEdit2 />
            </IconButton>
            <IconButton onClick={handleOpenPopover} id={droppableId} className={classes.deleteButton}>
              <FiTrash2 />
            </IconButton>
            <Popover onClose={handleClosePopover} name={droppableId}>
              <BoardColumnDelete columnId={droppableId} />
            </Popover>
          </Box>
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
