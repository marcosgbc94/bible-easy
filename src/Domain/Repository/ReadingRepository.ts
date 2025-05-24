import { ReadingModel } from "../../Data/Model/ReadingModel";
import { Reading } from "../Entities/Reading";

export interface ReadingRepository {
    getReadings(): Promise<Reading[]>;
    getReading(id: Number): Promise<Reading>;
    addReading(reading: ReadingModel): Promise<Boolean>;
    editReading(reading: ReadingModel): Promise<Boolean>;
    deleteReading(id: number): Promise<Boolean>;
    getNextIdReading(): Promise<Number>;
}