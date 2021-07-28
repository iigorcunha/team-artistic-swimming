export interface Card{
    id: string;
    name: string;
    color: string;
}
export interface Column {
    cards: Card[];
    id: string;
    title: string;
}