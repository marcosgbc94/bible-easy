import { BibleModel } from '@/Data/Model/BibleModel';
import { BibleDataSource } from '@/Domain/DataSource/BibleDataSource';
import { injectable } from 'inversify';

@injectable()
export class BibleDataSourceImp implements BibleDataSource {
    private bibleDataPath = import.meta.env.VITE_JSON_DATA_PATH; // Variable de entorno para la ruta del JSON
    private bibleDataLocal: BibleModel;

    /**
     * @description Si no se ha guardado los datos en memoria, los guarda y los devuelve
     * @returns Promise<Array<any>>
     */
    public async getBible(): Promise<Array<any>> {
        try {
            if (this.bibleDataLocal) {
                return this.bibleDataLocal;
            }

            this.bibleDataLocal = await this.getBibleFromJSON(this.bibleDataPath);

            return this.bibleDataLocal;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @description Retorna los datos de la Biblia en formato JSON
     * @param dataPath Ruta local para obtener el JSON
     * @returns Promise<any>
     */
    private async getBibleFromJSON(dataPath: string): Promise<any> {
        try {
            const bibleDataResponse = await fetch(dataPath, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            if (!bibleDataResponse.ok) {
                throw new Error(`No se logró obtener los datos desde la fuente. ${bibleDataResponse.status} ${bibleDataResponse.statusText}`);
            }

            return await bibleDataResponse.json();
        } catch (error) {
            throw error;
        }
    }
}
