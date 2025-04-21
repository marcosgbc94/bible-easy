import { VerseModel } from '@/Infraesctructure/Model/VerseModel';

export interface ChapterModel {
    verses: VerseModel<Array<any>>
}