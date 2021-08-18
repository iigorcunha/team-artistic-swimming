import { Box, Dialog, DialogContent, DialogTitle, Icon, Typography, IconButton } from '@material-ui/core';
import { FiClipboard } from 'react-icons/fi';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './useStyles';
import CardBadge from '../../CardBadge/CardBadge';
import { CardSidebar } from './CardSidebar/CardSidebar';
import { CardDescription } from './CardDescription/CardDescription';
import { CardComment } from './CardComment/CardComment';
import { CardDeadline } from './CardDeadline/CardDeadline';
import { CardTags } from './CardTags/CardTags';
import { CardAttachments } from './CardAttachments/CardAttachments';
import { useCard } from '../../../context/useCardContext';
import { CardChecklist } from './CardChecklist/CardChecklist';

interface CardDetailedDialogProps {
  open: boolean;
  handleClose: () => void;
}

const CardDetailedDialog: React.FC<CardDetailedDialogProps> = ({ open, handleClose }): JSX.Element => {
  const classes = useStyles();

  const { card } = useCard();

  return (
    <Dialog
      className={classes.dialogBox}
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth="md"
    >
      <DialogTitle disableTypography className={classes.title}>
        <Box className={classes.boxTitle}>
          <Icon className={classes.iconsColor}>
            <FiClipboard />
          </Icon>
          <Typography variant="h5" className={classes.text}>
            {card.name}
          </Typography>
          <CardBadge color={card.colorCode} />
        </Box>
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box className={classes.newColumnForm}>
          <Box className={classes.cardContent}>
            {card.tags && card.tags.length > 0 && <CardTags tags={card.tags} />}
            <CardDescription />
            {card.deadline && <CardDeadline deadline={card.deadline} />}
            {card.attachments && card.attachments.length > 0 && <CardAttachments />}
            {card.checklists &&
              card.checklists.length > 0 &&
              card.checklists.map((checklist) => <CardChecklist key={checklist._id} checklist={checklist} />)}
            <CardComment />
          </Box>
          <CardSidebar />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export { CardDetailedDialog };
