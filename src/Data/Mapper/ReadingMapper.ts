import { ReadingModel } from "../Model/ReadingModel";

export const ReadingMapper = (reading: any) : ReadingModel => ({
    id: reading.id,
    book: reading.book,
    chapter: reading.chapter,
    verse: reading.verse
});