import { useEffect, useState } from "react";
import { BookEntity } from "@/Domain/Entity/BookEntity";
import { ChapterEntity } from "@/Domain/Entity/ChapterEntity";
import { FindAllBooks } from '@/Domain/UseCase/FindAllBooks';
import { FindBookById } from '@/Domain/UseCase/FindBookById';
import { FindChapterById } from '@/Domain/UseCase/FindChapterById';
import { container } from "@/DI/container";
import { TYPES } from "@/DI/types";

export const HomeViewModel = () => {
  const [books, setBooks] = useState<BookEntity[]>([]);
  const [book, setBook] = useState<BookEntity>([]);
  const [chapter, setChapter] = useState<ChapterEntity>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    setLoading(true);
    const findAllBooks = container.get<FindAllBooks>(TYPES.FindAllBooks);
    const result = await findAllBooks.execute();
    
    setBooks(result);
    setLoading(false);
  };

  const selectBook = async (bookId: number) => {
    setLoading(true);
    const findBookById = container.get<FindBookById>(TYPES.FindBookById);
    const result = await findBookById.execute(bookId);

    setBook(result);
    setLoading(false);
  };

  const selectChapter = async (bookId: number, chapterId: number) => {
    setLoading(true);
    const findChapterById = container.get<FindChapterById>(TYPES.FindChapterById);
    const result = await findChapterById.execute(bookId, chapterId);

    setChapter(result);
    setLoading(false);
  };

  return { books, book, chapter, loading, selectBook, selectChapter };
};

