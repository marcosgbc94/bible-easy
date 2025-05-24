export interface BibleDataSource {
    getBible(): Promise<Array<any>>;
}