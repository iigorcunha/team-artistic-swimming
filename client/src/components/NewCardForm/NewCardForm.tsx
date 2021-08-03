import { Box, Button, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import { FC, useState } from 'react';
import useStyles from './useStyles';
import { Formik, Form } from 'formik';
import { Column } from '../../interface/Column';
import { useBoard } from '../../context/useBoardContext';
import * as yup from 'yup';

interface CardDialogFormProps {
  columnId: string;
}

const NewCardForm: FC<CardDialogFormProps> = ({ columnId }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const { board, updateBoard } = useBoard();
  const classes = useStyles();
  const handleToggleForm: () => void = () => {
    setOpen(!open);
  };
  const handleRadioSelection: (event: any) => void = (event) => {
    setSelectedColor(event.target.value);
  };
  return (
    <Box>
      {open ? (
        <Box className={classes.cardForm}>
          <Formik
            initialValues={{ name: '', color: '' }}
            validationSchema={yup.object({
              name: yup.string().required('Name is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              const modifiedBoard = Array.from(board);
              const columnToAddCard: Column = modifiedBoard.find((e) => e.id === columnId)!;
              columnToAddCard.cards.push({ ...values, id: values.name, color: selectedColor });
              updateBoard(modifiedBoard);
              handleToggleForm();
            }}
          >
            {({ isSubmitting, touched, errors, values, handleChange }) => (
              <Form>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Add title..."
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <Radio
                  checked={selectedColor === 'red'}
                  onChange={handleRadioSelection}
                  value="red"
                  name="color"
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Radio
                  checked={selectedColor === 'blue'}
                  onChange={handleRadioSelection}
                  value="blue"
                  name="color"
                  inputProps={{ 'aria-label': 'B' }}
                />
                <Radio
                  checked={selectedColor === 'yellow'}
                  onChange={handleRadioSelection}
                  value="yellow"
                  name="color"
                  inputProps={{ 'aria-label': 'C' }}
                />
                <Button type="submit" variant="outlined" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      ) : (
        <Button className={classes.addCardButton} onClick={handleToggleForm}>
          Add a card...
        </Button>
      )}
    </Box>
  );
};

export default NewCardForm;
