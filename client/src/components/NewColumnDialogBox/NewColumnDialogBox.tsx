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

const NewColumnDialogBox: FC = (): JSX.Element => {
  const { updateBoard, newColumnDialogOpen, toggleNewColumnDialog, clearNewColumnDetails, newColumnDetails, board } =
    useBoard();
  const { openBackdrop, closeBackdrop } = useBackdrop();
  const classes = useStyles();
  const doHandleClose = () => {
    if (newColumnDetails.position) {
      newColumnDetails.draggedCardColumn.cards.splice(
        newColumnDetails.draggedCardIndex,
        0,
        newColumnDetails.draggedCard,
      );
    }
    toggleNewColumnDialog();
  };

  return (
    <div>
      <Dialog open={newColumnDialogOpen} onClose={doHandleClose} aria-labelledby="form-dialog-title">
        <DialogTitle disableTypography className={classes.title}>
          <Typography variant="h6" className={classes.text}>
            Create a new column
          </Typography>
          {newColumnDialogOpen ? (
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
              if (!newColumnDetails.position) {
                updateBoard([{ cards: [], name: values.name }, ...board.columns]);
              } else if (newColumnDetails.position === 'left') {
                updateBoard([
                  {
                    cards: [{ ...newColumnDetails.draggedCard }],
                    name: values.name,
                  },
                  ...newColumnDetails.boardArrangement,
                ]);
              } else {
                updateBoard([
                  ...newColumnDetails.boardArrangement,
                  { cards: [{ ...newColumnDetails.draggedCard }], name: values.name },
                ]);
              }
              clearNewColumnDetails();
              toggleNewColumnDialog();
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
