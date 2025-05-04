import { BibleEntity } from '@/Domain/Entity/BibleEntity';
import { BibleModel } from '@/Data/Model/BibleModel';
import { BookEntityMapper } from '@/Domain/Mapper/BookEntityMapper';

export const BibleEntityMapper = (bible: BibleModel): BibleEntity => ({
    name: bible.name,
    abbreviation: bible.abbreviation,
    version: bible.version,
    books: bible.books.map(BookEntityMapper),
});
