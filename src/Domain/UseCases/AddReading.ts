import { ReadingRepository } from "@/Domain/Repository/ReadingRepository";
import { inject, injectable } from "inversify";
import { TYPES } from "@/DI/types";
import { ReadingModel } from "../../Data/Model/ReadingModel";

@injectable()
export class AddReading {
    private readingRepository: ReadingRepository;

    constructor (
        @inject(TYPES.ReadingRepository) readingRepository: ReadingRepository
    ) {
        this.readingRepository = readingRepository;
    }

    public async execute(reading: ReadingModel): Promise<Boolean> {
        try {
            return await this.readingRepository.addReading(reading);
        } catch (error) {
            throw new Error('No se logró crear la lectura');
        }
    }
}