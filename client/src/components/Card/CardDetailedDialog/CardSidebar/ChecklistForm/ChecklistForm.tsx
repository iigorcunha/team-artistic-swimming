import { Input, Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useCard } from '../../../../../context/useCardContext';
import { FormBase } from '../FormBase/FormBase';
import useStyles from './useStyles';

const ChecklistForm: React.FC = () => {
  const classes = useStyles();
  const { card, updateCard } = useCard();

  return (
    <FormBase formTitle="Create a checklist">
      <Formik
        initialValues={{ name: '' }}
        validationSchema={yup.object({
          name: yup.string().required('A checklist name is required.'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);

          if (card.checklists) {
            updateCard({ _id: card._id, checklists: [...card.checklists, { name: values.name }] });
          } else {
            updateCard({ _id: card._id, checklists: [{ name: values.name }] });
          }

          resetForm();
        }}
      >
        {({ isSubmitting, touched, errors, values, handleChange }) => (
          <Form className={classes.form}>
            <Input
              className={classes.inputForm}
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              placeholder="Check list title"
              onChange={handleChange}
              value={values.name}
              error={touched.name && Boolean(errors.name)}
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              disableElevation
              className={classes.submitButton}
              color="primary"
            >
              Create check-list
            </Button>
          </Form>
        )}
      </Formik>
    </FormBase>
  );
};

export { ChecklistForm };
