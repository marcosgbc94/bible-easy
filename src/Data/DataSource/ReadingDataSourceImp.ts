import { injectable } from 'inversify';
import { ReadingDataSource } from "../../Domain/DataSource/ReadingDataSource";
import { ReadingModel } from "../Model/ReadingModel";

@injectable()
export class ReadingDataSourceImp implements ReadingDataSource {
    private localStorageKey = "READINGS";

    public async selectAllReadings(): Promise<Array<any>> {
        try {
            const dataString = window.localStorage.getItem(this.localStorageKey);
            
            if (!dataString) {
                return []; 
            }

            return JSON.parse(dataString); 
        } catch (error) {
            return []; 
        }
    }

    public async alterReading(newReadings: ReadingModel[]): Promise<Boolean> {
        try {
            localStorage.setItem(this.localStorageKey, JSON.stringify(newReadings));

            return true;
        } catch (error) {
            return false;
        }
    }
}