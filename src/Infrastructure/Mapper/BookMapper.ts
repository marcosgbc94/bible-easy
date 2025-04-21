import { BookModel } from '@/Infrastructure/Model/BookModel';
import { ChapterMapper } from '@/Infrastructure/Mapper/ChapterMapper';

export const BookMapper = (book: any): BookModel => ({
    id: book.id,
    name: book.name,
    abbreviation: book.abbreviation,
    location: book.location,
    chapters: book.chapters.map(ChapterMapper),
});
  