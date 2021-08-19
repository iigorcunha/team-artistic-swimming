import { Box, Button, Checkbox, IconButton, Input, TextField } from '@material-ui/core';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { Item } from '../../../../../interface/Board';
import { useStyles } from './useStyles';
import { FiEdit, FiTrash2, FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useChecklist } from '../../../../../context/useChecklistContext';
import { useCard } from '../../../../../context/useCardContext';

interface ChecklistItemProps {
  item: Item;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item }) => {
  const [editItem, setEditItem] = useState(false);

  const { openedItem, handleItem } = useChecklist();
  const { updateItem, removeItem } = useCard();

  useEffect(() => {
    setEditItem(openedItem === item._id);
  }, [openedItem, item._id]);

  const classes = useStyles({ itemDone: item.done, editableItem: editItem });

  return (
    <Box id={item._id} key={item._id} className={classes.itemsContainer}>
      <Formik
        enableReinitialize
        initialValues={{ name: item.name, done: item.done }}
        validationSchema={yup.object({
          name: yup.string().required('item name is required'),
          done: yup.boolean().required(),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);

          updateItem({ _id: item._id, name: values.name, done: values.done });

          editItem && handleItem('closed');

          resetForm();
        }}
      >
        {({ isSubmitting, touched, errors, values, handleChange, submitForm }) => (
          <Form className={classes.form}>
            <Box className={classes.formContainer}>
              <Checkbox
                color="primary"
                id="done"
                name="done"
                checked={values.done}
                onChange={handleChange}
                size="medium"
                onClick={() => !editItem && submitForm()}
              />
              <Input
                className={classes.input}
                id="name"
                name="name"
                disabled={!editItem}
                disableUnderline
                autoComplete="off"
                multiline={editItem}
                onChange={handleChange}
                rows={editItem ? 4 : 1}
                value={values.name}
                error={touched.name && Boolean(errors.name)}
              />
            </Box>
            {!editItem ? (
              <>
                <IconButton className={classes.editIcon} onClick={() => handleItem(item._id)}>
                  <FiEdit />
                </IconButton>
                <IconButton className={classes.deleteIcon} onClick={() => removeItem(item._id)}>
                  <FiX />
                </IconButton>
              </>
            ) : (
              <Box className={classes.editFooter}>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  disableElevation
                  className={classes.submitButton}
                  color="primary"
                >
                  Save
                </Button>
                <IconButton className={classes.icons} onClick={() => handleItem('closed')}>
                  <FiX />
                </IconButton>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export { ChecklistItem };
