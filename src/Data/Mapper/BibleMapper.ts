import { BibleModel } from '@/Data/Model/BibleModel';
import { BookMapper } from '@/Data/Mapper/BookMapper';

export const BibleMapper = (bible: any): BibleModel => {
    return {
        name: bible.name,
        abbreviation: bible.abbreviation,
        version: bible.version,
        books: bible.books.map(BookMapper),
    };
}