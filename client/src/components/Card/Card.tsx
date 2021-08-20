import { Typography } from '@material-ui/core';
import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useBoard } from '../../context/useBoardContext';
import { useCard } from '../../context/useCardContext';
import { useDialog } from '../../context/useDialogContext';
import { dateFormat } from '../../helpers/date/dateFormat';
import { Card } from '../../interface/Board';
import CardBadge from '../CardBadge/CardBadge';
import { CardDetailedDialog } from './CardDetailedDialog/CardDetailedDialog';
import useStyles from './useStyles';

interface CardProps {
  card: Card;
  index: number;
}

const BoardCard: FC<CardProps> = ({ card, index }): JSX.Element => {
  const classes = useStyles();

  const { getCard, card: selectedCard, isFetching } = useCard();

  const { fetchBoard, board } = useBoard();

  const { handleDialog, openedDialog, onClose } = useDialog();

  async function handleDetailedCard(): Promise<void> {
    getCard(card._id);

    handleDialog(card._id);
  }

  async function handleCloseCard(): Promise<void> {
    onClose();
    fetchBoard(board._id);
  }
  return (
    <>
      <div onClick={handleDetailedCard}>
        <Draggable key={card._id} draggableId={card._id} index={index}>
          {(provided) => (
            <li
              className={classes.card}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <CardBadge color={card.colorCode} />
              <Typography className={classes.cardName}>{card.name}</Typography>
              {card.deadline ? <Typography color="textSecondary">{dateFormat(card.deadline)}</Typography> : null}
            </li>
          )}
        </Draggable>
      </div>
      {!!selectedCard && !isFetching && (
        <CardDetailedDialog open={openedDialog === card._id} handleClose={handleCloseCard} />
      )}
    </>
  );
};

export default BoardCard;
