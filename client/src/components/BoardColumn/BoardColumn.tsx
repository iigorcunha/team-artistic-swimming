import { Box, IconButton, Input } from '@material-ui/core';
import * as yup from 'yup';
import { Formik } from 'formik';
import { FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { FiTrash2 } from 'react-icons/fi';
import { usePopover } from '../../context/usePopoverContext';
import { Card } from '../../interface/Board';
import BoardCard from '../Card/Card';
import NewCardForm from '../NewCardForm/NewCardForm';
import { Popover } from '../Popover/Popover';
import { BoardColumnDelete } from './BoardColumnDelete/BoardColumnDelete';
import useStyles from './useStyles';
import { useBoard } from '../../context/useBoardContext';
import { useRef } from 'react';

interface ColumnProps {
  column: Card[];
  droppableId: string;
  name: string;
  index: number;
}

const BoardColumn: FC<ColumnProps> = ({ column, droppableId, name, index }): JSX.Element => {
  const { handleOpenPopover, handleClosePopover } = usePopover();
  const { editableColumn, handleEditColumn, updateColumn } = useBoard();
  const inputRef = useRef<HTMLInputElement>(null);

  const classes = useStyles({ editColumn: editableColumn === droppableId });

  function handleInput(columnId: string) {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
    handleEditColumn(columnId);
  }

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
                  id="name"
                  name="name"
                  value={values.name}
                  inputProps={{
                    className: classes.pointer,
                  }}
                  autoComplete="off"
                  inputRef={inputRef}
                  disabled={!(droppableId === editableColumn)}
                  disableUnderline
                  onChange={handleChange}
                  onClick={() => !(droppableId === editableColumn) && handleInput(droppableId)}
                  onKeyPress={(event) => event.key === 'Enter' && submitForm()}
                  className={classes.columnTitle}
                  error={touched.name && Boolean(errors.name)}
                  onBlur={() => handleEditColumn('closed')}
                />
              )}
            </Formik>
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
