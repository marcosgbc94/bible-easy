import { inject, injectable } from "inversify";
import { BibleRepository } from "@/Domain/Repository/BibleRepository";
import { TYPES } from "@/DI/types";
import { BookEntity } from "@/Domain/Entity/BookEntity";
import { ChapterEntityMapper } from "@/Domain/Mapper/ChapterEntityMapper";

@injectable()
export class FindChapterById {
    private bibleRepository: BibleRepository;

    public constructor(@inject(TYPES.BibleRepository) bibleRepository: BibleRepository) {
        this.bibleRepository = bibleRepository;
    }

    public async execute(bookId: number, chapterId: number): Promise<BookEntity> {
        try {
            const chapter = await this.bibleRepository.getChapterById(bookId, chapterId);

            if (!chapter) {
                throw new Error("Capítulo no encontrado.");
            }

            return ChapterEntityMapper(chapter);
        } catch (error: any) {
            throw new Error(`Error al obtener el Capítulo con ID ${bookId}: ${error?.message || error}`);
        }
    }
}