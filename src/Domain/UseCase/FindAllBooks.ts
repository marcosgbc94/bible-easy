import { BibleRepository } from "@/Domain/Repository/BibleRepository";
import { BookEntity } from "@/Domain/Entity/BookEntity";
import { inject, injectable } from "inversify";
import { TYPES } from "@/DI/types";

@injectable()
export class FindAllBooks {
    private bibleRepository: BibleRepository;

    constructor (
        @inject(TYPES.BibleRepository) bibleRepository: BibleRepository
    ) {
        this.bibleRepository = bibleRepository;
    }

    // Método para obtener todos los libros
    public async execute(): Promise<BookEntity[]> {
        try {
            const bible = await this.bibleRepository.getBible();
            
            return bible.books;  // Devuelve todos los libros de la Biblia
        } catch (error) {
            throw new Error('Error al obtener los libros');
        }
    }
}
