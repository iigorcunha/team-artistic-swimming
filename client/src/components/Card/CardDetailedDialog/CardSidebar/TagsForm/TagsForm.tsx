import { Input, Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useCard } from '../../../../../context/useCardContext';
import { FormBase } from '../FormBase/FormBase';
import useStyles from './useStyles';

const TagsForm: React.FC = () => {
  const classes = useStyles();

  const { card, updateCard } = useCard();

  return (
    <FormBase formTitle="Add a tag">
      <Formik
        initialValues={{ tag: '' }}
        validationSchema={yup.object({
          tag: yup.string().required('tag name is required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);

          if (card.tags) {
            const newTags = [...card.tags];

            newTags.push(values.tag);

            updateCard({ _id: card._id, tags: newTags });
          } else {
            updateCard({ _id: card._id, tags: [...values.tag] });
          }

          resetForm();
        }}
      >
        {({ isSubmitting, touched, errors, values, handleChange }) => (
          <Form className={classes.form}>
            <Input
              className={classes.inputForm}
              id="tag"
              name="tag"
              type="text"
              autoComplete="off"
              placeholder="create a tag"
              onChange={handleChange}
              value={values.tag}
              error={touched.tag && Boolean(errors.tag)}
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              disableElevation
              className={classes.submitButton}
              color="primary"
            >
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </FormBase>
  );
};

export { TagsForm };
