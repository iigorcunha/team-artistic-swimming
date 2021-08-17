import { Box, Button, Icon, Input, Typography, IconButton } from '@material-ui/core';
import * as yup from 'yup';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { FiMessageCircle, FiX } from 'react-icons/fi';
import { useCard } from '../../../../context/useCardContext';
import { dateFormat } from '../../../../helpers/date/dateFormat';
import { useStyles } from './useStyles';

const CardComment: React.FC = () => {
  const [enableInput, setEnableInput] = useState(false);
  const classes = useStyles({ enableInput });
  const { card, updateCard } = useCard();
  return (
    <Box className={classes.inputContainer}>
      <Icon className={classes.icons}>
        <FiMessageCircle />
      </Icon>
      <Box className={classes.inputContent}>
        <Typography className={classes.inputLabelText} variant="h6">
          Add a comment:
        </Typography>
        {card.comments &&
          card.comments.length > 0 &&
          card.comments.map((comment) => (
            <Box className={classes.commentContainer} key={comment._id}>
              <Box className={classes.commentHeader}>
                <Typography className={classes.commentUsername} variant="h6">
                  {comment.username}
                </Typography>
                <Typography className={classes.commentTime} variant="subtitle1">
                  {dateFormat(comment.createdAt)}
                </Typography>
              </Box>
              <Typography>{comment.comment}</Typography>
            </Box>
          ))}

        <Formik
          initialValues={{ comment: '' }}
          validationSchema={yup.object({
            comment: yup.string().required('a comment is required.'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            if (card.comments && card.comments.length > 0) {
              updateCard({ _id: card._id, comments: [...card.comments, { comment: values.comment }] });
            } else {
              updateCard({ _id: card._id, comments: [{ comment: values.comment }] });
            }

            setEnableInput(false);
            resetForm();
          }}
        >
          {({ isSubmitting, values, handleChange }) => (
            <Form className={classes.form}>
              <Input
                placeholder="Write a comment..."
                readOnly={!enableInput}
                id="comment"
                name="comment"
                value={values.comment}
                onChange={handleChange}
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
                    disableElevation
                    className={classes.button}
                    color="primary"
                    variant="contained"
                    type="submit"
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

export { CardComment };
