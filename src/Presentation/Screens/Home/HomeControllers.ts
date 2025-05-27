import { container } from "@/DI/container";
import { BibleRepository } from "@/Data/Repository/BibleRepository";
import { TYPES } from "@/DI/types";
import { Book } from "@/Domain/Entity/Book";
import { Reading } from "@/Domain/Entities/Reading";
import { Chapter } from "../../../Domain/Entities/Chapter";
import { Verse } from "../../../Domain/Entities/Verse";
import { ReadingRepository } from "../../../Domain/Repository/ReadingRepository";

/************************************************
 * BIBLE REPOSTORY
 ***********************************************/

/**
 * Obtiene todos los libros del caso de uso
 * @returns Promise<Book[]>
 */
export const getAllBooks = async (): Promise<Book[]> => {
    const books = container.get<BibleRepository>(TYPES.GetAllBooks);
    return await books.execute();
};

/**
 * Obtiene un determinado libro
 * @param bookId Identificador del libro
 * @returns Promise<Book>
 */
export const getBook = async (bookId: number): Promise<Book> => {
    const getBookUseCase = container.get<BibleRepository>(TYPES.GetBook);
    return await getBookUseCase.execute(bookId);
};

/**
 * Obtiene los capítulos de un determinado libro
 * @param bookId Identificador del libro
 * @returns Promise<Chapter[]>
 */
export const getAllChaptersFromBook = async (bookId: number): Promise<Chapter[]> => {
    const bibleRepository = container.get<BibleRepository>(TYPES.GetAllChapters);
    return await bibleRepository.execute(bookId);
};

/************************************************
 * READING REPOSTORY
 ***********************************************/

/**
 * Obtiene un nuevo identificador para una nueva lectura
 * @returns Promise<Number>
 */
export const getNextIdReading = async (): Promise<Number> => {
    const getNextIdReadingUseCase = container.get<ReadingRepository>(TYPES.GetNextIdReading);
    return await getNextIdReadingUseCase.execute();
}

/**
 * Obtiene la lectura activa
 * @param currentReading Identificador lectura activa
 * @param readings Listado de lecturas
 * @returns Promise<Reading[]>
 */
export const getReadings = async () : Promise<Reading[]> => {
    const getAllReadingsuseCase = container.get<ReadingRepository>(TYPES.GetAllReadings);
    return await getAllReadingsuseCase.execute();
}

/**
 * Obtiene una determinada lectura
 * @param id Identificador de lectura
 * @returns Promise<Reading[]>
 */
export const getReading = async (id: Number) : Promise<Reading[]> => {
    const getReadingUseCase = container.get<ReadingRepository>(TYPES.GetReading);
    return await getReadingUseCase.execute(id);
}

/**
 * Agrega una lectura
 * @param reading Lectura a agregar
 * @returns Promise<Boolean>
 */
export const addReading = async (reading: Reading): Promise<Boolean> => {
    const addReadinsUseCase = container.get<ReadingRepository>(TYPES.AddReading);
    return await addReadinsUseCase.execute(reading);
}

/**
 * Edita una lectura
 * @param reading Lectura a editar
 * @returns Promise<Boolean>
 */
export const editReading = async (reading: Reading): Promise<Boolean> => {
    const editReadinsUseCase = container.get<ReadingRepository>(TYPES.EditReading);
    return await editReadinsUseCase.execute(reading);
}













/**
 * Agrega una lectura
 * @param setReading Función para agregar lectura
 * @param currentReading Identificador de lectura actual
 * @param book Libro
 * @param chapter Capítulo
 * @param verse Versículo
 */
export const addReading2 = (
    setReading: React.Dispatch<React.SetStateAction<Reading[]>>,
    currentReading: number, 
    book?: Book, 
    chapter?: Chapter, 
    verse?: Verse
) => {
    setReading(prevReadings => [
        ...prevReadings,
        {
            id: currentReading,
            book: book, 
            chapter: chapter, 
            verse: verse
        }
    ]);
}

/**
 * Edita una determina lectura
 * @param setReading Función para agregar lectura
 * @param currentReading Identificador de lectura actual
 * @param book Libro
 * @param chapter Capítulo
 * @param verse Versículo
 */
export const editReading2 = (
    setReading: React.Dispatch<React.SetStateAction<Reading[]>>,
    currentReading: number, 
    book: Book, 
    chapter?: Chapter, 
    verse?: Verse
) => {
    setReading(prevReadings =>
        prevReadings.map(reading => {
            if (reading.id === currentReading) {
                return {
                ...reading,
                book: book,
                chapter: chapter,
                verse: verse
                };
            }
            return reading;
        })
    );
}




export const getAllVersesFromChapter = async (bookId: number, chapterId: number) => {
    const bibleRepository = container.get<BibleRepository>(TYPES.BibleRepository);
    return await bibleRepository.getVerses(bookId, chapterId);
};



export const selectChapter = async (bookId: number, chapterId: number) => {
    const bibleRepository = container.get<BibleRepository>(TYPES.BibleRepository);
    return await bibleRepository.getChapterById(bookId, chapterId);
};

export const selectVerse = async (bookId: number, chapterId: number, verseId: number) => {
    const bibleRepository = container.get<BibleRepository>(TYPES.BibleRepository);
    return await bibleRepository.getVerseById(bookId, chapterId, verseId);
}