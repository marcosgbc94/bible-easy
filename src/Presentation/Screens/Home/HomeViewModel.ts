import { useEffect, useState } from "react";
import * as HomeControllers from "@/Presentation/Screens/Home/HomeControllers";
import * as Utilities from "@/Presentation/Screens/Home/Utilities";
import { BookModel } from "@/Data/Model/BookModel";
import { ChapterModel } from "@/Data/Model/ChapterModel";
import { VerseModel } from "@/Data/Model/VerseModel";
import { Reading } from "@/Presentation/types";
import { Book } from "../../../Domain/Entities/Book";
import { Chapter } from "../../../Domain/Entities/Chapter";
import { Verse } from "../../../Domain/Entities/Verse";

export const HomeViewModel = () => {
    const [loading, setLoading] = useState(true);

    const [books, setBooks] = useState<BookModel[]>([]);
    const [chapters, setChapters] = useState<ChapterModel[]>([]);
    const [verses, setVerses] = useState<VerseModel[]>([]);

    const [book, setBook] = useState<BookModel>([]);
    const [chapter, setChapter] = useState<ChapterModel>([]);
    const [verse, setVerse] = useState<VerseModel>([]);

    const [readings, setReading] = useState<Reading>([]);
    const [currentReading, setCurrentReading] = useState<Number>(0);

    useEffect(() => {
        handleGetBooks();
        handleLoadReadingInLocal();
    }, []);
    
    /************************************************
     * BIBLE HANDLERS
     ***********************************************/

    /**
     * Manejador cuando se obtienen los libros
     */
    const handleGetBooks = async () => {
        setLoading(true);
        setBooks(await HomeControllers.getAllBooks());
        setLoading(false);
    }

    /**
     * Manejador cuando se selecciona un determinado libro
     * @param bookId Identificador del libro
     */
    const handleSelectBook = async (bookId: number) => {
        setLoading(true);

        const book = await HomeControllers.getBook(bookId);
        const editedReading = {
            id: currentReading,
            book: book
        }
        console.log(editedReading)
        HomeControllers.editReading(editedReading);
        
        setChapters(await HomeControllers.getAllChaptersFromBook(bookId));

        setLoading(false);
    }

    /************************************************
     * READING HANDLERS
     ***********************************************/

    const handleLoadReadingInLocal = async () => {
        setLoading(true);

        const readingLoaded = await HomeControllers.getReadings();

        if (readingLoaded.length) {
            setReading(readingLoaded);
        } else {
            handleAddReading();
        }

        setLoading(false);
    }

    /**
     * Manejador cuando se agrega una lectura
     * @param reading Lectura a agregar
     */
    const handleAddReading = async (book?: Book, chapter?: Chapter, verse?: Verse) => {
        setLoading(true);

        const id = await HomeControllers.getNextIdReading();
        const reading = {
            id: id,
            book: book,
            chapter: chapter,
            verse: verse
        };

        const readingAdded = await HomeControllers.addReading(reading);

        if (readingAdded) {
            if (readings.length) {
                setReading(prevReadings => [
                    ...prevReadings,
                    reading
                ]);
            } else {
                setReading([reading]);
            }            
        }

        setCurrentReading(id);

        setLoading(false);
    }

    const handleEditReading = async () => {
        setLoading(true);



        setLoading(false);
    }
    












    const handleSelectChapter = async (bookId: number, chapterId: number) => {
        setLoading(true);

        setChapter(await HomeControllers.selectChapter(bookId, chapterId));
        setVerses(await HomeControllers.getAllVersesFromChapter(bookId, chapterId));

        setLoading(false);
    }

    const handleSelectVerse = async (bookId: number, chapterId: number, verseId: number) => {
        setLoading(true);

        setVerse(await HomeControllers.selectVerse(bookId, chapterId, verseId));

        if (currentReading === 0) {
            setCurrentReading(Utilities.getNewIdReading(readings));
            Utilities.addReading(setReading, currentReading, book, chapter, verse);
        } else {
            Utilities.editReading(setReading, currentReading, book, chapter, verse);
        }

        setLoading(false);
    }

    const handleGetCurrentReading = () => {
        return Utilities.getReading(currentReading, setCurrentReading);
    }

    

  const addReading2 = () => {
    setLoading(true);
    setCurrentReading(0);
    setBook([]);
    setChapter([]);
    setVerse([]);

    setLoading(false);
  }

  return { books, book, chapters, chapter, verses, verse, loading, handleSelectBook, handleSelectChapter, handleSelectVerse, readings, addReading2, handleGetCurrentReading };
};

