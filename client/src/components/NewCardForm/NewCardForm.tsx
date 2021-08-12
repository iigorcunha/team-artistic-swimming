import { Box, Button, TextField, Typography } from '@material-ui/core';
import { FC, useState } from 'react';
import useStyles from './useStyles';
import { Formik, Form } from 'formik';
import { ColorTags, Column } from '../../interface/Board';
import { useBoard } from '../../context/useBoardContext';
import * as yup from 'yup';
import BadgePalette from './ColorBadgePalette';

interface CardDialogFormProps {
  columnId: string;
}

const NewCardForm: FC<CardDialogFormProps> = ({ columnId }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<ColorTags>('');
  const { board, updateBoard } = useBoard();
  const classes = useStyles();
  const handleToggleForm: () => void = () => {
    setOpen(!open);
  };
  const handleColorSelection: (color: ColorTags) => void = (color) => {
    setSelectedColor(color);
  };
  return (
    <Box className={classes.cardFormContainer}>
      {open ? (
        <Box>
          <Formik
            initialValues={{ name: '', colorCode: '' }}
            validationSchema={yup.object({
              name: yup.string().required('Name is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              const modifiedBoard = Array.from(board.columns);
              const columnToAddCard: Column | undefined = modifiedBoard.find((e) => e._id === columnId);
              if (columnToAddCard) {
                columnToAddCard.cards.push({ ...values, name: values.name, colorCode: selectedColor });
                updateBoard(modifiedBoard);
                handleToggleForm();
              }
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
                    style: { color: 'black', fontWeight: 'bold', margin: 'auto 8px' },
                  }}
                />
                <Box className={classes.radioInputContainer}>
                  <Typography color="textSecondary" variant="subtitle2">
                    Select a color tag:
                  </Typography>
                  <BadgePalette dohandleSetColor={handleColorSelection} />
                </Box>
                <Button type="submit" variant="contained" className={classes.formButton} disableElevation>
                  Add a card
                </Button>
                <Button onClick={handleToggleForm} variant="outlined" disableElevation>
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
