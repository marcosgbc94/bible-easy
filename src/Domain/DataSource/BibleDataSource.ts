import { BibleModel } from '@/Data/Model/BibleModel';

export interface BibleDataSource {
    getBible(): Promise<BibleModel>;
}