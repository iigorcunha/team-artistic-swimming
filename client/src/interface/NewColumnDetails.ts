import { Card, Column } from "./Board";

export interface NewColumDetails {
    position: string,
    boardArrangement: Column[],
    draggedCardColumn: Column,
    draggedCard: Card,
    draggedCardIndex: number,
}