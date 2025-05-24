import { VerseModel } from '@/Data/Model/VerseModel';

export interface ChapterModel {
    id: number,
    number: number,
    versesLength: number
    verses: VerseModel<Array<any>>
}