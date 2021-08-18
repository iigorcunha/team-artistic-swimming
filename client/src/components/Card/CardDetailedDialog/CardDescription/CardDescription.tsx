import { Box, Button, Icon, Input, Typography, IconButton } from '@material-ui/core';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { FiBookOpen, FiX } from 'react-icons/fi';
import { useStyles } from './useStyles';
import { useCard } from '../../../../context/useCardContext';

const CardDescription: React.FC = () => {
  const [enableInput, setEnableInput] = useState(false);
  const classes = useStyles({ enableInput });

  const { card, updateCard } = useCard();

  return (
    <Box className={classes.inputContainer}>
      <Icon className={classes.icons}>
        <FiBookOpen />
      </Icon>
      <Box className={classes.inputContent}>
        <Typography className={classes.inputLabelText} variant="h6">
          Description:
        </Typography>

        <Formik
          initialValues={{ description: !!card.description ? card.description : '' }}
          validationSchema={yup.object({
            description: yup.string().required('tag name is required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            updateCard({ _id: card._id, description: values.description });
            setEnableInput(false);
          }}
        >
          {({ isSubmitting, values, handleChange }) => (
            <Form className={classes.form}>
              <Input
                id="description"
                name="description"
                placeholder="Add a description..."
                onChange={handleChange}
                value={values.description}
                readOnly={!enableInput}
                onClick={() => setEnableInput(true)}
                disableUnderline
                className={classes.textArea}
                multiline
                rows={4}
                rowsMax={8}
              />

              {enableInput && (
                <Box className={classes.footerContainer}>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    disableElevation
                    className={classes.button}
                    color="primary"
                    variant="contained"
                  >
                    Save
                  </Button>
                  <IconButton className={classes.icons} onClick={() => setEnableInput(false)}>
                    <FiX />
                  </IconButton>
                </Box>
              )}
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export { CardDescription };
