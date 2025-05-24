import { ReadingRepository } from "@/Domain/Repository/ReadingRepository";
import { inject, injectable } from "inversify";
import { TYPES } from "@/DI/types";

@injectable()
export class GetNextIdReading {
    private readingRepository: ReadingRepository;

    constructor (
        @inject(TYPES.ReadingRepository) readingRepository: ReadingRepository
    ) {
        this.readingRepository = readingRepository;
    }

    public async execute(): Promise<Boolean> {
        try {
            return await this.readingRepository.getNextIdReading();
        } catch (error) {
            throw new Error('No se encontró lectura');
        }
    }
}