import { VerseEntity } from '@/Domain/Entity/VerseEntity';

export interface ChapterEntity {
    verses: VerseEntity<Array<any>>
}