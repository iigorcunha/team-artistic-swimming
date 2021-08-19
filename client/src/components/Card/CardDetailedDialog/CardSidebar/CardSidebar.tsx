import { Box, Typography } from '@material-ui/core';
import { usePopover } from '../../../../context/usePopoverContext';
import { Popover } from '../../../Popover/Popover';
import { AttachmentForm } from './AttachmentForm/AttachmentForm';
import { CardSidebarButton } from './CardSidebarButton/CardSidebarButton';
import { ChecklistForm } from './ChecklistForm/ChecklistForm';
import { DeadlineForm } from './DeadlineForm/DeadlineForm';
import { DeleteCardForm } from './DeleteForm/DeleteForm';
import { TagsForm } from './TagsForm/TagsForm';
import { useStyles } from './useStyles';

const CardSidebar: React.FC = () => {
  const classes = useStyles();

  const { setPopoverIsOpen } = usePopover();

  const handleOpenTags = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverIsOpen({ anchorEl: event.currentTarget, openedPopover: event.currentTarget.id });
  };

  const handleCloseTags = () => {
    setPopoverIsOpen({ anchorEl: null, openedPopover: '' });
  };

  return (
    <Box className={classes.sidebarCard}>
      <Typography className={classes.sidebarSectionName}>ADD TO CARD:</Typography>
      <CardSidebarButton id="popover-tags" onClick={handleOpenTags}>
        Tag
      </CardSidebarButton>
      <Popover name="popover-tags" onClose={handleCloseTags}>
        <TagsForm />
      </Popover>
      <CardSidebarButton id="popover-checklist" onClick={handleOpenTags}>
        Check-list
      </CardSidebarButton>
      <Popover name="popover-checklist" onClose={handleCloseTags}>
        <ChecklistForm />
      </Popover>
      <CardSidebarButton id="popover-deadline" onClick={handleOpenTags}>
        Deadline
      </CardSidebarButton>
      <Popover name="popover-deadline" onClose={handleCloseTags}>
        <DeadlineForm />
      </Popover>
      <CardSidebarButton id="popover-attachment" onClick={handleOpenTags}>
        Attachment
      </CardSidebarButton>
      <Popover name="popover-attachment" onClose={handleCloseTags}>
        <AttachmentForm />
      </Popover>

      <Typography className={classes.sidebarSectionName} style={{ marginTop: 16 }}>
        Actions:
      </Typography>
      <CardSidebarButton id="popover-delete" onClick={handleOpenTags}>
        Delete
      </CardSidebarButton>
      <Popover name="popover-delete" onClose={handleCloseTags}>
        <DeleteCardForm />
      </Popover>
    </Box>
  );
};

export { CardSidebar };
