export interface Card{
    id: string;
    name: string;
    image: string;
}
export interface Column {
    cards: Card[];
    id: string;
}