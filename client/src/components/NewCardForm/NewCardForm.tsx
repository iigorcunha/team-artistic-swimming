import { Box, Button, Radio, TextField, Typography } from '@material-ui/core';
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
    <Box className={classes.cardFormContainer}>
      {open ? (
        <Box>
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
            {({ touched, errors, values, handleChange }) => (
              <Form>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Add title..."
                  type="text"
                  autoComplete="off"
                  value={values.name}
                  className={classes.textInput}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  InputLabelProps={{
                    style: { color: 'black', fontWeight: 'bold', margin: '0 0 2px 8px' },
                  }}
                />
                <Box className={classes.radionInputContainer}>
                  <Typography color="textSecondary">Select Tag:</Typography>
                  <Box>
                    <Radio
                      checked={selectedColor === 'red'}
                      onChange={handleRadioSelection}
                      className={classes.radioRed}
                      value="red"
                      name="color"
                      inputProps={{ 'aria-label': 'red' }}
                    />
                    <Radio
                      checked={selectedColor === 'blue'}
                      onChange={handleRadioSelection}
                      className={classes.radioBlue}
                      value="blue"
                      name="color"
                      inputProps={{ 'aria-label': 'blue' }}
                    />
                    <Radio
                      checked={selectedColor === 'yellow'}
                      onChange={handleRadioSelection}
                      className={classes.radioYellow}
                      value="yellow"
                      name="color"
                      inputProps={{ 'aria-label': 'yellow' }}
                    />
                    <Radio
                      checked={selectedColor === 'green'}
                      onChange={handleRadioSelection}
                      className={classes.radioGreen}
                      value="green"
                      name="color"
                      inputProps={{ 'aria-label': 'green' }}
                    />
                  </Box>
                </Box>
                <Button type="submit" variant="contained" color="primary" className={classes.formButton}>
                  Add a card
                </Button>
                <Button onClick={handleToggleForm} variant="contained" color="secondary" className={classes.formButton}>
                  Cancel
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
