import { BibleRepository } from "@/Domain/Repository/BibleRepository";
import { BibleDataSource } from "@/Data/DataSource/BibleDataSource";
import { BibleModel } from "@/Data/Model/BibleModel";
import { BibleMapper } from "@/Data/Mapper/BibleMapper";
import { BookModel } from "@/Data/Model/BookModel";
import { BookMapper } from "@/Data/Mapper/BookMapper";
import { ChapterModel } from "@/Data/Model/ChapterModel";
import { ChapterMapper } from "@/Data/Mapper/ChapterMapper";
import { VerseModel } from "@/Data/Model/VerseModel";
import { VerseMapper } from "@/Data/Mapper/VerseMapper";
import { injectable, inject } from "inversify";
import { TYPES } from "@/DI/types";

@injectable()
export class BibleRepositoryImp implements BibleRepository {
    private bibleDataSource: BibleDataSource;

    constructor(
        @inject(TYPES.BibleDataSource) bibleDataSource: BibleDataSource  // Inyección de la interfaz
    ) {
        this.bibleDataSource = bibleDataSource;  // Asignar la instancia de BibleDataSource
    }

    public async getBible(): Promise<BibleModel> {
        try {
            const bible = await this.bibleDataSource.getBible();

            return BibleMapper(bible);
        } catch (error) {
            
        }
    }

    public async getBooks(): Promise<BookModel[]> {
        try {
            const bible = await this.getBible();

            return bible.books.map(book => BookMapper(book));
        } catch (error) {
            return [];
        }
    }

    public async getChapters(bookId: number): Promise<BookModel[]> {
        try {
            const book = await this.getBookById(bookId);

            return book.chapters.map(chapter => ChapterMapper(chapter));
        } catch (error) {
            return [];
        }
    }

    public async getVerses(bookId: number, chapterId: number): Promise<BookModel[]> {
        try {
            const chapter = await this.getChapterById(bookId, chapterId);

            return chapter.verses.map(verse => VerseMapper(verse));
        } catch (error) {
            return [];
        }
    }

    public async getBookById(bookId: number): Promise<BookModel> {
        try {
            const bible = await this.getBible();
            const book = bible.books.find((book: any) => book.id === bookId);

            return BookMapper(book);
        } catch (error) {
            
        }
    }

    public async getChapterById(bookId: number, chapterId: number): Promise<ChapterModel> {
        try {
            const book = await this.getBookById(bookId);
            const chapter = book.chapters.find((chapter: any) => chapter.id === chapterId);

            return ChapterMapper(chapter);
        } catch (error) {
            
        }
    }
    
    public async getVerseById(bookId: number, chapterId: number, verseId: number): Promise<VerseModel> {
        try {
            const chapter = await this.getChapterById(bookId, chapterId);
            const verse = chapter.verses.find((verse: any) => verse.id === verseId);
        
            return VerseMapper(verse);
        } catch (error) {
            
        }
    }    
}