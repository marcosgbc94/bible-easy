import { Book } from "../Entities/Book";

export const BookMapper = (book: any): Book => ({
    id: book.id,
    name: book.name,
    abbreviation: book.abbreviation,
    location: book.location,
    chaptersLength: book.chapters.length
});
  