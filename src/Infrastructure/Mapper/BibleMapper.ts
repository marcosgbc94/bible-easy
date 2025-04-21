import { BibleModel } from '@/Infrastructure/Model/BibleModel';
import { BookMapper } from '@/Infrastructure/Mapper/BookMapper';

export const BibleMapper = (bible: any): BibleModel => {
    return {
        name: bible.name,
        abbreviation: bible.abbreviation,
        version: bible.version,
        books: bible.books.map(BookMapper),
    };
}