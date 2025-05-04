import { ChapterModel } from '@/Infraesctructure/Model/ChapterModel';

export interface BookModel {
    id: number,
    name: string,
    abbreviation: string,
    location: string,
    chapters: ChapterModel<Array<any>>
}