import { TextField, Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useCard } from '../../../../../context/useCardContext';
import { dateFormatLocal } from '../../../../../helpers/date/dateFormat';
import { FormBase } from '../FormBase/FormBase';
import useStyles from './useStyles';

const DeadlineForm: React.FC = () => {
  const classes = useStyles();
  const { card, updateCard } = useCard();

  return (
    <FormBase formTitle="Set a deadline">
      <Formik
        initialValues={{ deadline: '' }}
        validationSchema={yup.object({
          deadline: yup.string().required('A date is required.'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);

          updateCard({ _id: card._id, deadline: dateFormatLocal(values.deadline) });

          resetForm();
        }}
      >
        {({ isSubmitting, touched, errors, values, handleChange }) => (
          <Form className={classes.form}>
            <TextField
              className={classes.inputForm}
              id="deadline"
              name="deadline"
              type="datetime-local"
              autoComplete="off"
              placeholder="choose a date"
              onChange={handleChange}
              format-value="yyyy/mm/dd hh:mm"
              value={values.deadline}
              error={touched.deadline && Boolean(errors.deadline)}
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              disableElevation
              className={classes.submitButton}
              color="primary"
            >
              Set deadline
            </Button>
          </Form>
        )}
      </Formik>
    </FormBase>
  );
};

export { DeadlineForm };
