import { BibleModel } from '@/Data/Model/BibleModel';
import { BookModel } from '@/Data/Model/BookModel';
import { ChapterModel } from '@/Data/Model/ChapterModel';
import { VerseModel } from '@/Data/Model/VerseModel';

export interface BibleRepository {
    getBible(): Promise<BibleModel>;
    getBookById(bookId: number): BookModel | undefined;
    getChapterById(bookId: number, chapterId: number): ChapterModel | undefined;
    getVerseById(bookId: number, chapterId: number, verseId: number): VerseModel | undefined;
}