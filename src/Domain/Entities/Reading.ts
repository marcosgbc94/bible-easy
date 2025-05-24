import { Book } from "./Book";
import { Chapter } from "./Chapter";
import { Verse } from "./Verse";

export interface Reading {
    id: number,
    book: Book,
    chapter: Chapter,
    verse: Verse
}