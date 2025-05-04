import { VerseEntity } from '@/Domain/Entity/VerseEntity';

export interface ChapterEntity {
    id: number,
    number: number,
    verses: VerseEntity<Array<any>>
}