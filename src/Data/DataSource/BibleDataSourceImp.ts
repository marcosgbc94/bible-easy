import { BibleModel } from '@/Data/Model/BibleModel';
import { BibleMapper } from '@/Data/Mapper/BibleMapper';
import { BibleDataSource } from '@/Domain/DataSource/BibleDataSource';
import { injectable } from 'inversify';

@injectable()
export class BibleDataSourceImp implements BibleDataSource {
  private bibleDataPath = import.meta.env.VITE_JSON_DATA_PATH;
  private bibleDataLocal: BibleModel | null = null;

  /**
   * @description Si no se ha guardado los datos del JSON en memoria, los guarda y los devuelve
   */
  public async getBible(): Promise<BibleModel> {
    try {
      if (this.bibleDataLocal) return this.bibleDataLocal;

      const bibleDataPathLocal = this.bibleDataPath;
      const bibleDataResponse = await this.getBibleFromJSON(bibleDataPathLocal); // Espera la respuesta resuelta
      const bibleDataResponseModel = this.getBibleFromModel(bibleDataResponse); // Pasa los datos resueltos a BibleMapper

      this.bibleDataLocal = bibleDataResponseModel;

      return this.bibleDataLocal;
    } catch (error) {
      throw error;
    }
  }

  /**
   * @description Retorna los datos de la Biblia en formato JSON
   */
  private async getBibleFromJSON(dataPath: string): Promise<JSON> {
    try {
      const bibleDataResponse = await fetch(dataPath, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });

      if (!bibleDataResponse.ok) {
        throw new Error(
          `No se logró obtener los datos desde la fuente. ${bibleDataResponse.status} ${bibleDataResponse.statusText}`
        );
      }

      return await bibleDataResponse.json(); // Devuelve los datos JSON resueltos
    } catch (error) {
      throw error;
    }
  }

  private getBibleFromModel(dataJSON: any): BibleModel {
    try {
      if (!dataJSON) throw new Error(`No se encontraron datos.`);

      return BibleMapper(dataJSON); // Mapea los datos JSON al modelo
    } catch (error) {
      throw error;
    }
  }
}
