import { ReadingRepository } from "@/Domain/Repository/ReadingRepository";
import { inject, injectable } from "inversify";
import { TYPES } from "@/DI/types";

@injectable()
export class GetReading {
    private readingRepository: ReadingRepository;

    constructor (
        @inject(TYPES.ReadingRepository) readingRepository: ReadingRepository
    ) {
        this.readingRepository = readingRepository;
    }

    public async execute(id: Number): Promise<Boolean> {
        try {
            return await this.readingRepository.getReading(id);
        } catch (error) {
            throw new Error('No se logró encontrar la lectura');
        }
    }
}