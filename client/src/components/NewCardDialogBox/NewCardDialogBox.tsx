import { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useStyles from './useStyles';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useBoard } from '../../context/useBoardContext';
import { Column } from '../../interface/Column';

interface CardDialogFormProps {
  columnId: string;
}

const NewCardDialogBox: FC<CardDialogFormProps> = ({ columnId }): JSX.Element => {
  const { board, updateBoard } = useBoard();
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.dialogContainer}>
      <Button className={classes.addCardButton} onClick={handleClickOpen}>
        Add a card...
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="add-card-dialog-title">
        <DialogTitle id="add-card-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Add Card Form</DialogContentText>
          <Formik
            initialValues={{ name: '', color: '', deadline: '' }}
            validationSchema={yup.object({
              name: yup.string().required('Name is required'),
              color: yup.string().required('Color is required'),
              deadline: yup.string(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              const modifiedBoard = Array.from(board);
              const columnToAddCard: Column = modifiedBoard.find((e) => e.id === columnId)!;
              columnToAddCard.cards.push({ ...values, id: values.name });
              updateBoard(modifiedBoard);
              handleClose();
            }}
          >
            {({ isSubmitting, touched, errors, values, handleChange }) => (
              <Form>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <TextField
                  fullWidth
                  id="color"
                  name="color"
                  label="color"
                  type="text"
                  value={values.color}
                  onChange={handleChange}
                  error={touched.color && Boolean(errors.color)}
                  helperText={touched.color && errors.color}
                />
                <TextField
                  fullWidth
                  id="deadline"
                  name="deadline"
                  label="deadline"
                  type="text"
                  value={values.deadline}
                  onChange={handleChange}
                  error={touched.deadline && Boolean(errors.deadline)}
                  helperText={touched.deadline && errors.deadline}
                />
                <Button type="submit" variant="outlined" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewCardDialogBox;
