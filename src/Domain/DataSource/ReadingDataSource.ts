import { ReadingModel } from "../../Data/Model/ReadingModel";

export interface ReadingDataSource {
    selectAllReadings(): Promise<Array<any>>;
    alterReading(newReadings: ReadingModel[]): Promise<Boolean>;
}