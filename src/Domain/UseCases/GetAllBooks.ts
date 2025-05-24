import { BibleRepository } from "@/Domain/Repository/BibleRepository";
import { Book } from "@/Domain/Entity/Book";
import { inject, injectable } from "inversify";
import { TYPES } from "@/DI/types";
import { BookMapper } from "@/Domain/Mappers/BookMapper";

@injectable()
export class GetAllBooks {
    private bibleRepository: BibleRepository;

    constructor (
        @inject(TYPES.BibleRepository) bibleRepository: BibleRepository
    ) {
        this.bibleRepository = bibleRepository;
    }

    public async execute(): Promise<Book[]> {
        try {
            const books = await this.bibleRepository.getBooks();
            
            return books.map(book => BookMapper(book));
        } catch (error) {
            throw new Error('Error al obtener los libros');
        }
    }
}