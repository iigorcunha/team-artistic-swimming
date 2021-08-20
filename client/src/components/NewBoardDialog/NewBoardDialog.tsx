import { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import { useBoard } from '../../context/useBoardContext';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

const NewBoardDialogBox: FC = (): JSX.Element => {
  const { createNewBoard } = useBoard();
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.createBoardButton}
        onClick={handleClickOpen}
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
      >
        Create Board
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle disableTypography className={classes.title}>
          <Typography variant="h6" className={classes.text}>
            Create a new board
          </Typography>
          {open ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ name: '' }}
            validationSchema={yup.object({
              name: yup.string().required('Name is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              createNewBoard(values.name);
              handleClose();
            }}
          >
            {({ isSubmitting, touched, errors, values, handleChange }) => (
              <Form className={classes.newBoardForm}>
                <TextField
                  variant="outlined"
                  id="name"
                  name="name"
                  label="Add Board"
                  autoComplete="off"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  className={classes.textField}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                  className={classes.submitButton}
                >
                  Create
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewBoardDialogBox;
