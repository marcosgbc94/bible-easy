import { ChapterEntity } from '@/Domain/Entity/ChapterEntity';

export interface BookEntity {
    id: number,
    name: string,
    abbreviation: string,
    location: string,
    chapters: ChapterEntity<Array<any>>
}