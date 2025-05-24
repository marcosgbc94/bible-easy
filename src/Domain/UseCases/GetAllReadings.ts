import { ReadingRepository } from "@/Domain/Repository/ReadingRepository";
import { inject, injectable } from "inversify";
import { TYPES } from "@/DI/types";

@injectable()
export class GetAllReadings {
    private readingRepository: ReadingRepository;

    constructor (
        @inject(TYPES.ReadingRepository) readingRepository: ReadingRepository
    ) {
        this.readingRepository = readingRepository;
    }

    public async execute(): Promise<Boolean> {
        try {
            return await this.readingRepository.getReadings();
        } catch (error) {
            throw new Error('No se logró encontrar la lectura');
        }
    }
}