import { BookEntity } from '@/Domain/Entity/BookEntity';

export interface BibleEntity {
    name: string;
    abbreviation: string;
    version: string;
    books: BookEntity<Array<any>>
}