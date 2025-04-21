import { BibleModel } from '@/Infrastructure/Model/BibleModel';

export interface BibleDataSource {
    getBible(): Promise<BibleModel>;
}