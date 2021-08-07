export interface Card{
    id: string;
    name: string;
    color: ColorTags;
    deadline?: string
}
export interface Column {
    cards: Card[];
    id: string;
    title: string;
}

export type ColorTags = 'red' | 'blue' | 'yellow' | 'green' | ''