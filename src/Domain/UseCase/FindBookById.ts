import { inject, injectable } from "inversify";
import { BibleRepository } from "@/Domain/Repository/BibleRepository";
import { TYPES } from "@/DI/types";
import { BookEntity } from "@/Domain/Entity/BookEntity";
import { BookEntityMapper } from "@/Domain/Mapper/BookEntityMapper";

@injectable()
export class FindBookById {
    private bibleRepository: BibleRepository;

    public constructor(@inject(TYPES.BibleRepository) bibleRepository: BibleRepository) {
        this.bibleRepository = bibleRepository;
    }

    public async execute(bookId: number): Promise<BookEntity> {
        try {
            const book = await this.bibleRepository.getBookById(bookId);

            if (!book) {
                throw new Error("Libro no encontrado.");
            }

            return BookEntityMapper(book);
        } catch (error: any) {
            throw new Error(`Error al obtener el libro con ID ${bookId}: ${error?.message || error}`);
        }
    }
}