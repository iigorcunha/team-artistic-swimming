import { useState, useContext, createContext } from 'react';
import cardDetails from '../helpers/APICalls/cardDetails';
import deleteCard from '../helpers/APICalls/deleteCard';
import deleteChecklist from '../helpers/APICalls/deleteChecklist';
import deleteItem from '../helpers/APICalls/deleteItem';
import listOneCard from '../helpers/APICalls/listOneCard';
import patchChecklist from '../helpers/APICalls/patchChecklist';
import patchItem from '../helpers/APICalls/patchItem';
import postCard from '../helpers/APICalls/postCard';
import { Card, CreateCard } from '../interface/Board';
import { UpdatedCard } from '../interface/CardApiData';
import { CreateItem, UpdatedItem } from '../interface/ChecklistApiData';

interface ICardContext {
  card: Card;
  isFetching: boolean;
  createCard: (card: CreateCard) => Promise<Card | undefined>;
  getCard: (cardId: string) => void;
  updateCard: (card: UpdatedCard) => void;
  updateItem: (item: UpdatedItem) => void;
  removeItem: (itemId: string) => void;
  createItem: (checklistId: string, items: CreateItem[]) => void;
  removeChecklist: (checklistId: string) => void;
  removeCard: (cardId: string) => void;
}

export const CardContext = createContext<ICardContext>({} as ICardContext);

export const CardProvider: React.FC = ({ children }): JSX.Element => {
  const [card, setCard] = useState<Card>({} as Card);
  const [isFetching, setIsFetching] = useState(false);

  async function refetchCard(cardId: string) {
    const response = await listOneCard(cardId);
    if (response.card) {
      setCard(response.card);
    } else {
      console.error(response.error);
    }
  }

  async function createCard(card: CreateCard) {
    const response = await postCard(card);

    if (response.card) {
      return response.card;
    } else {
      console.error(response.error);
    }
  }

  async function getCard(cardId: string) {
    setIsFetching(true);

    const response = await listOneCard(cardId);

    if (response.card) {
      setCard(response.card);
      setIsFetching(false);
    } else {
      console.error(response.error);
      setIsFetching(false);
    }
  }

  async function removeCard(cardId: string) {
    const response = await deleteCard(cardId);

    if (response.error) {
      console.error(response.error);
    }

    if (response.success) {
      setCard({} as Card);
    }
  }

  async function updateCard(card: UpdatedCard) {
    const response = await cardDetails(card);

    if (response.card) {
      setCard(response.card);
    } else {
      console.error(response.error);
    }
  }

  async function updateItem(item: UpdatedItem) {
    const response = await patchItem(item);

    if (response.error) {
      console.error(response.error);
    } else {
      await refetchCard(card._id);
    }
  }

  async function removeItem(itemId: string) {
    const response = await deleteItem(itemId);

    if (response.success) {
      await refetchCard(card._id);
    }

    if (response.error) {
      console.error(response.error);
    }
  }

  async function createItem(checklistId: string, items: CreateItem[]) {
    const response = await patchChecklist(checklistId, items);

    if (response.success) {
      await refetchCard(card._id);
    }

    if (response.error) {
      console.error(response.error);
    }
  }

  async function removeChecklist(checklistId: string) {
    const response = await deleteChecklist(checklistId);

    if (response.error) {
      console.error(response.error);
    } else {
      await refetchCard(card._id);
    }
  }

  return (
    <CardContext.Provider
      value={{
        card,
        isFetching,
        createCard,
        getCard,
        updateCard,
        updateItem,
        removeItem,
        createItem,
        removeChecklist,
        removeCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export function useCard(): ICardContext {
  return useContext(CardContext);
}
