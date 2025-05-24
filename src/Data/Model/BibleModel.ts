import { BookModel } from '@/Data/Model/BookModel';

export interface BibleModel {
    name: string;
    abbreviation: string;
    version: string;
    books: BookModel<Array<any>>
}