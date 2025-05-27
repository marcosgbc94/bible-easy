import { Reading } from "../Entities/Reading";

export const ReadingMapper = (reading: any): Reading => ({
    id: reading.id,
    book: reading.book,
    chapter: reading.chapter,
    verse: reading.verse
});