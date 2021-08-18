import { FC } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import { useBoard } from '../../context/useBoardContext';
import { useBackdrop } from '../../context/useBackDropContext';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';

interface ColumnDialogFormProps {
  open: boolean;
  handleClose: () => void;
  details: any;
}

const NewColumnDialogBox: FC<ColumnDialogFormProps> = ({ open, handleClose, details }): JSX.Element => {
  const { updateBoard } = useBoard();
  const { openBackdrop, closeBackdrop } = useBackdrop();
  const classes = useStyles();
  const doHandleClose = () => {
    details.draggedCardColumn.cards.splice(details.draggedCardIndex, 0, details.draggedCard);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={doHandleClose} aria-labelledby="form-dialog-title">
        <DialogTitle disableTypography className={classes.title}>
          <Typography variant="h6" className={classes.text}>
            Create a new column
          </Typography>
          {open ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={doHandleClose}>
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
              openBackdrop();
              setTimeout(() => {
                closeBackdrop();
              }, 1200);
              if (details.position === 'left') {
                updateBoard([{ cards: [{ ...details.draggedCard }], name: values.name }, ...details.boardArrangement]);
              } else {
                updateBoard([...details.boardArrangement, { cards: [{ ...details.draggedCard }], name: values.name }]);
              }
              handleClose();
            }}
          >
            {({ isSubmitting, touched, errors, values, handleChange }) => (
              <Form className={classes.newColumnForm}>
                <TextField
                  variant="outlined"
                  id="name"
                  name="name"
                  label="Add name"
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

export default NewColumnDialogBox;
