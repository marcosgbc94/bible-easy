import { BookEntity } from '@/Domain/Entity/BookEntity';
import { BookModel } from '@/Infrastructure/Model/BookModel';
import { ChapterEntityMapper } from '@/Domain/Mapper/ChapterEntityMapper';

export const BookEntityMapper = (book: BookModel): BookEntity => ({
    id: book.id,
    name: book.name,
    abbreviation: book.abbreviation,
    location: book.location,
    chapters: book.chapters.map(ChapterEntityMapper),
});
