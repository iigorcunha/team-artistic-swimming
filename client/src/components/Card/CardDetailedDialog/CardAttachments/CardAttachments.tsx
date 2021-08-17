import { Link } from '@material-ui/core';
import { Box, Icon, Typography } from '@material-ui/core';
import { FiPaperclip } from 'react-icons/fi';
import { useCard } from '../../../../context/useCardContext';
import { useStyles } from './useStyles';

const CardAttachments: React.FC = () => {
  const classes = useStyles();
  const { card } = useCard();
  return (
    <Box className={classes.sectionContainer}>
      <Icon className={classes.icons}>
        <FiPaperclip />
      </Icon>
      <Box className={classes.sectionContent}>
        <Typography className={classes.sectionLabelText} variant="h6">
          Attachments:
        </Typography>
        <Box className={classes.attachmentContainer}>
          {card.attachments?.map((attachment) => (
            <Link key={attachment._id} href={attachment.url} target="_blank" className={classes.linkText}>
              {attachment.name}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { CardAttachments };
