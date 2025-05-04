import { VerseModel } from '@/Infraesctructure/Model/VerseModel';

export interface ChapterModel {
    id: number,
    number: number,
    verses: VerseModel<Array<any>>
}