import { ChapterEntity } from '@/Domain/Entity/ChapterEntity';
import { ChapterModel } from '@/Infrastructure/Model/ChapterModel';
import { VerseEntityMapper } from '@/Domain/Mapper/VerseEntityMapper';

export const ChapterEntityMapper = (chapter: ChapterModel): ChapterEntity => ({
    verses: chapter.verses.map(VerseEntityMapper),
});