import { BibleRepository } from "@/Domain/Repository/BibleRepository";
import { inject, injectable } from "inversify";
import { TYPES } from "@/DI/types";
import { Chapter } from "../Entities/Chapter";
import { ChapterMapper } from "../../Data/Mapper/ChapterMapper";
import { Book } from "../Entities/Book";

@injectable()
export class GetAllChapters {
    private bibleRepository: BibleRepository;

    constructor (
        @inject(TYPES.BibleRepository) bibleRepository: BibleRepository
    ) {
        this.bibleRepository = bibleRepository;
    }

    public async execute(bookId: Book): Promise<Chapter[]> {
        try {
            const chapters = await this.bibleRepository.getChapters(bookId);
            
            return chapters.map(chapter => ChapterMapper(chapter));
        } catch (error) {
            throw new Error('Error al obtener los capítulos');
        }
    }
}