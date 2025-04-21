import { ChapterModel } from '@/Infrastructure/Model/ChapterModel';
import { VerseMapper } from '@/Infrastructure/Mapper/VerseMapper';

export const ChapterMapper = (chapter: any): ChapterModel => ({
    verses: chapter.verses.map(VerseMapper),
});