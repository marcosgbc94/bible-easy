import { ChapterModel } from '@/Data/Model/ChapterModel';
import { VerseMapper } from '@/Data/Mapper/VerseMapper';

export const ChapterMapper = (chapter: any): ChapterModel => ({
    id: chapter.id,
    number: chapter.number,
    verses: chapter.verses.map(VerseMapper),
});