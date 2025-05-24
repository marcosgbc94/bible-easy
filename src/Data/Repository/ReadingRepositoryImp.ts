import { injectable, inject } from "inversify";
import { TYPES } from "@/DI/types";
import { ReadingDataSource } from "@/Domain/DataSource/ReadingDataSource";
import { ReadingMapper } from "../Mapper/ReadingMapper";
import { ReadingModel } from "../Model/ReadingModel";

@injectable()
export class ReadingRepositoryImp implements ReadingRepository {
    private readingDataSource: ReadingDataSource;

    constructor(
        @inject(TYPES.ReadingDataSource) readingDataSource: ReadingDataSource  // Inyección de la interfaz
    ) {
        this.readingDataSource = readingDataSource;  // Asignar la instancia de BibleDataSource
    }

    public async getReadings(): Promise<ReadingModel[]> {
        try {
            const readings = await this.readingDataSource.selectAllReadings();
            
            return readings.map(reading => ReadingMapper(reading));
        } catch (error) {
            return []; 
        }
    }

    public async getReading(id: Number): Promise<ReadingModel> {
        try {
            const readings = await this.readingDataSource.selectAllReadings();
            
            return ReadingMapper(readings.map(reading => reading.id === id));
        } catch (error) {
            return []; 
        }
    }

    public async editReading(reading: ReadingModel): Promise<Boolean> {
        try {
            const readings = await this.readingDataSource.selectAllReadings();

            const updated = readings.map(r =>
                r.id === reading.id ? reading : r
            );

            return this.readingDataSource.alterReading(updated);
        } catch (error) {
            return false; 
        }
    }

    public async addReading(reading: ReadingModel): Promise<Boolean> {
        try {
            const allReadings = await this.readingDataSource.selectAllReadings();

            allReadings.push(reading);

            return this.readingDataSource.alterReading(allReadings);
        } catch (error) {
            return false;
        }
    }

    public async deleteReading(id: number): Promise<Boolean> {
        try {
            const readings = await this.readingDataSource.selectAllReadings();

            const updated = readings.filter(r => r.id !== id);

            return this.readingDataSource.alterReading(updated);
        } catch (error) {
            return false;
        }
    }

    public async getNextIdReading(): Promise<Number> {
        try {
            const allReadings =  await this.readingDataSource.selectAllReadings();

            if (allReadings.length === 0) {
                return 1;
            }

            const highestId = Math.max(...allReadings.map((reading) => reading.id));

            return highestId + 1;
        } catch (error) {
            return 1;
        }
    }
}