// src/Presentation/ViewModel/HomeViewModel.ts
import { useEffect, useState } from "react";
import { BookEntity } from "@/Domain/Entity/BookEntity";
//import { FindAllBooks } from '@/Domain/UseCase/FindAllBooks';
import { FindBookById } from '@/Domain/UseCase/FindBookById';
import { container } from "@/DI/container";
import { TYPES } from "@/DI/types";

export const HomeViewModel = () => {
  //const [books, setBooks] = useState<BookEntity[]>([]);
  const [books, setBooks] = useState<BookEntity>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        //const findAllBooks = container.get<FindAllBooks>(TYPES.FindAllBooks);
        const findBookById = container.get<FindBookById>(TYPES.FindBookById);
        //const result = await findAllBooks.execute();
        const result = await findBookById.execute(1);
        
        setBooks(result);
      } catch (error) {
        console.error("Error cargando libros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, loading };
};

