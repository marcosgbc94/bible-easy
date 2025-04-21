import { VerseModel } from '@/Infrastructure/Model/VerseModel';

export const VerseMapper = (verse: any): VerseModel => ({
    title: verse.title,
    content: verse.content
});