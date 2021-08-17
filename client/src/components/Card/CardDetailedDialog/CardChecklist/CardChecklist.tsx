import { Box, Button, Icon, IconButton, Input, Typography } from '@material-ui/core';
import { FiCheckCircle, FiTrash2, FiX } from 'react-icons/fi';
import * as yup from 'yup';
import { useCard } from '../../../../context/useCardContext';
import { Checklist } from '../../../../interface/Board';
import { useStyles } from './useStyles';
import { ChecklistItem } from './ChecklistItem/ChecklistItem';
import { useEffect, useState } from 'react';
import { useChecklist } from '../../../../context/useChecklistContext';
import { Form, Formik } from 'formik';

interface CardChecklistProps {
  checklist: Checklist;
}

const CardChecklist: React.FC<CardChecklistProps> = ({ checklist }) => {
  const classes = useStyles();

  const [addItem, setAddItem] = useState(false);
  const { openedItem, handleItem } = useChecklist();
  const { createItem, removeChecklist } = useCard();

  useEffect(() => {
    setAddItem(openedItem === checklist._id);
  }, [openedItem, checklist._id]);

  return (
    <Box className={classes.sectionContainer}>
      <Icon className={classes.icons}>
        <FiCheckCircle />
      </Icon>
      <Box className={classes.sectionContent}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.sectionLabelText} variant="h6">
            {checklist.name}
          </Typography>
          <Button className={classes.deleteButton} onClick={() => removeChecklist(checklist._id)}>
            <FiTrash2 />
          </Button>
        </Box>
        <Box className={classes.checklistContainer}>
          {checklist.items.map((item) => (
            <ChecklistItem key={item._id} item={item} />
          ))}
        </Box>
        <Box>
          {!addItem ? (
            <Button className={classes.addButton} onClick={() => handleItem(checklist._id)}>
              Add an item
            </Button>
          ) : (
            <Formik
              initialValues={{ name: '' }}
              validationSchema={yup.object({
                name: yup.string().required('tag name is required'),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(false);
                if (checklist.items.length > 0) {
                  createItem(checklist._id, [...checklist.items, { name: values.name }]);
                } else {
                  createItem(checklist._id, [{ name: values.name }]);
                }

                resetForm();
              }}
            >
              {({ values, handleChange }) => (
                <Form>
                  <Box className={classes.addItemContainer}>
                    <Input autoComplete="off" name="name" id="name" onChange={handleChange} value={values.name} />
                    <Box>
                      <Button type="submit" className={classes.addButton}>
                        Add
                      </Button>
                      <IconButton className={classes.icons} onClick={() => handleItem('closed')}>
                        <FiX />
                      </IconButton>
                    </Box>
                  </Box>
                </Form>
              )}
            </Formik>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export { CardChecklist };
