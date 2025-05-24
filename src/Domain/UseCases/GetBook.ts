import { BibleRepository } from "@/Domain/Repository/BibleRepository";
import { Book } from "@/Domain/Entity/Book";
import { inject, injectable } from "inversify";
import { TYPES } from "@/DI/types";
import { BookMapper } from "@/Domain/Mappers/BookMapper";

@injectable()
export class GetBook {
    private bibleRepository: BibleRepository;

    constructor (
        @inject(TYPES.BibleRepository) bibleRepository: BibleRepository
    ) {
        this.bibleRepository = bibleRepository;
    }

    public async execute(bookId: Number): Promise<Book> {
        try {
            const book = await this.bibleRepository.getBookById(bookId);
            
            return BookMapper(book);
        } catch (error) {
            throw new Error('Error al obtener el libro');
        }
    }
}