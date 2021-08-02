import { FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import { useBoard } from '../../context/useBoardContext';

interface DialogFormProps {
  open: boolean;
  handleClose: () => void;
  details: any;
}

const NewColumnDialogBox: FC<DialogFormProps> = ({ open, handleClose, details }): JSX.Element => {
  const { updateBoard } = useBoard();
  const doHandleClose = () => {
    details.draggedCardColumn.cards.splice(details.draggedCardIndex, 0, details.draggedCard);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={doHandleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Form for a new Column</DialogContentText>
          <Formik
            initialValues={{ title: '' }}
            validationSchema={yup.object({
              title: yup.string().required('Title is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              if (details.position === 'left') {
                updateBoard([
                  { cards: [{ ...details.draggedCard }], id: values.title, title: values.title },
                  ...details.boardArrangement,
                ]);
              } else {
                updateBoard([
                  ...details.boardArrangement,
                  { cards: [{ ...details.draggedCard }], id: values.title, title: values.title },
                ]);
              }
              handleClose();
            }}
          >
            {({ isSubmitting, touched, errors, values, handleChange }) => (
              <Form>
                <TextField
                  fullWidth
                  id="title"
                  name="title"
                  label="title"
                  type="text"
                  value={values.title}
                  onChange={handleChange}
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={doHandleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={doHandleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NewColumnDialogBox;
