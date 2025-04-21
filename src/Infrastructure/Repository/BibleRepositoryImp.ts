import { BibleRepository } from "@/Domain/Repository/BibleRepository";
import { BibleDataSource } from "@/Domain/DataSource/BibleDataSource";  // Interfaz en lugar de la implementación
import { BibleEntity } from "@/Domain/Entity/BibleEntity";
import { BibleMapper } from "@/Infrastructure/Mapper/BibleMapper";
import { BookEntity } from "@/Domain/Entity/BookEntity";
import { BookMapper } from "@/Infrastructure/Mapper/BookMapper";
import { ChapterEntity } from "@/Domain/Entity/ChapterEntity";
import { ChapterMapper } from "@/Infrastructure/Mapper/ChapterMapper";
import { VerseEntity } from "@/Domain/Entity/VerseEntity";
import { VerseMapper } from "@/Infrastructure/Mapper/VerseMapper";
import { injectable, inject } from "inversify";
import { TYPES } from "@/DI/types";

@injectable()
export class BibleRepositoryImp implements BibleRepository {
    private bibleDataSource: BibleDataSource;  // Utilizar la interfaz

    constructor(
        @inject(TYPES.BibleDataSource) bibleDataSource: BibleDataSource  // Inyección de la interfaz
    ) {
        this.bibleDataSource = bibleDataSource;  // Asignar la instancia de BibleDataSource
    }

    public async getBible(): Promise<BibleEntity> {
        try {
            const bibleModel = await this.bibleDataSource.getBible(); // obtiene un BibleModel
            return BibleMapper(bibleModel); // convierte a BibleEntity
        } catch (error) {
            throw new Error(`Error al obtener la Biblia: ${error.message}`);
        }
    }

    public async getBookById(id: number): Promise<BookEntity> {
        try {
            const bibleDataJSON = await this.bibleDataSource.getBible(); // obtenemos los datos de la Biblia
            const bookData = bibleDataJSON.books.find((book: any) => book.id === id); // buscar el libro por ID

            if (!bookData) {
                throw new Error('Libro no encontrado');
            }

            return BookMapper(bookData); // mapea a BookEntity
        } catch (error) {
            throw new Error(`Error al obtener el libro con ID ${id}: ${error.message}`);
        }
    }

    public async getChapterById(bookId: number, chapterId: number): Promise<ChapterEntity> {
        const bibleDataJSON = await this.getBible();
    
        // Buscar el libro por ID
        const bookData = bibleDataJSON.books.find((book: any) => book.id === bookId);
        if (!bookData) {
            throw new Error('Libro no encontrado');
        }
    
        // Buscar el capítulo dentro del libro
        const chapterData = bookData.chapters.find((chapter: any) => chapter.id === chapterId);
        if (!chapterData) {
            throw new Error('Capítulo no encontrado');
        }
    
        return ChapterMapper(chapterData);
    }
    
    public async getVerseById(bookId: number, chapterId: number, verseId: number): Promise<VerseEntity> {
        const chapterData = await this.getChapterById(bookId, chapterId);
    
        // Buscar el versículo dentro del capítulo
        const verseData = chapterData.verses.find((verse: any) => verse.id === verseId);
        if (!verseData) {
            throw new Error('Versículo no encontrado');
        }
    
        return VerseMapper(verseData);
    }    
}