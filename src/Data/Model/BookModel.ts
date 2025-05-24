import { ChapterModel } from '@/Data/Model/ChapterModel';

export interface BookModel {
    id: number,
    name: string,
    abbreviation: string,
    location: string,
    chaptersLength: number
    chapters: ChapterModel<Array<any>>
}