import { VerseModel } from '@/Data/Model/VerseModel';

export const VerseMapper = (verse: any): VerseModel => ({
    id: verse.id,
    number: verse.number,
    title: verse.title,
    content: verse.content
});