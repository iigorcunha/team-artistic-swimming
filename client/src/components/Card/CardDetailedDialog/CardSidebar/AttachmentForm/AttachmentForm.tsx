import { Input, Button } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useCard } from '../../../../../context/useCardContext';
import { FormBase } from '../FormBase/FormBase';
import useStyles from './useStyle';

const AttachmentForm: React.FC = () => {
  const classes = useStyles();
  const { card, updateCard } = useCard();

  return (
    <FormBase formTitle="Attach with a link">
      <Formik
        initialValues={{ name: '', url: '' }}
        validationSchema={yup.object({
          name: yup.string().required('A common name for url is required.'),
          url: yup.string().required('A url is required.'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);

          if (card.attachments) {
            updateCard({ _id: card._id, attachments: [...card.attachments, { name: values.name, url: values.url }] });
          } else {
            updateCard({ _id: card._id, attachments: [{ name: values.name, url: values.url }] });
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
              placeholder="Link name."
              onChange={handleChange}
              value={values.name}
              error={touched.name && Boolean(errors.name)}
            />
            <Input
              className={classes.inputForm}
              id="url"
              name="url"
              type="text"
              autoComplete="off"
              placeholder="Attach a link."
              onChange={handleChange}
              value={values.url}
              error={touched.url && Boolean(errors.url)}
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              disableElevation
              className={classes.submitButton}
              color="primary"
            >
              Attach
            </Button>
          </Form>
        )}
      </Formik>
    </FormBase>
  );
};

export { AttachmentForm };
