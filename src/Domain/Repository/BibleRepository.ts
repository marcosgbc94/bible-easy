import { BibleEntity } from '@/Domain/Entity/BibleEntity';
import { BookEntity } from '@/Domain/Entity/BookEntity';
import { ChapterEntity } from '@/Domain/Entity/ChapterEntity';
import { VerseEntity } from '@/Domain/Entity/VerseEntity';

export interface BibleRepository {
    getBible(): Promise<BibleEntity>;
    getBookById(bookId: number): BookEntity | undefined;
    getChapterById(bookId: number, chapterIndex: number): ChapterEntity | undefined;
    getVerse(bookId: number, chapterIndex: number, verseIndex: number): VerseEntity | undefined;
}