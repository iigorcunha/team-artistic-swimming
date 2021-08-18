import { IconButton } from '@material-ui/core';
import { Box, Icon, Typography } from '@material-ui/core';
import { FiTag, FiX } from 'react-icons/fi';
import { useCard } from '../../../../context/useCardContext';
import { useStyles } from './useStyles';

interface CardTagsProps {
  tags: string[];
}

const CardTags: React.FC<CardTagsProps> = ({ tags }) => {
  const { card, updateCard } = useCard();

  const classes = useStyles();

  function handleRemoveTags(tagIndex: number) {
    const newTags = tags.filter((tag, index) => index !== tagIndex);
    updateCard({ _id: card._id, tags: newTags });
  }
  return (
    <Box className={classes.sectionContainer}>
      <Icon className={classes.icons}>
        <FiTag />
      </Icon>
      <Box className={classes.sectionContent}>
        <Typography className={classes.labelText} variant="h6">
          Tags:
        </Typography>
        <Box className={classes.tagsContainer}>
          {tags.map((tag, index) => (
            <Box key={`${tag}-${index}`} className={classes.tag}>
              <IconButton onClick={() => handleRemoveTags(index)} className={classes.tagCloseButton}>
                <FiX />
              </IconButton>
              <Typography className={classes.tagText}>{tag}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { CardTags };
