import { ChapterEntity } from '@/Domain/Entity/ChapterEntity';
import { ChapterModel } from '@/Data/Model/ChapterModel';
import { VerseEntityMapper } from '@/Domain/Mapper/VerseEntityMapper';

export const ChapterEntityMapper = (chapter: ChapterModel): ChapterEntity => ({
    id: chapter.id,
    number: chapter.number,
    verses: chapter.verses.map(VerseEntityMapper),
});