import { VerseEntity } from '@/Domain/Entity/VerseEntity';
import { VerseModel } from '@/Data/Model/VerseModel';

export const VerseEntityMapper = (verse: VerseModel): VerseEntity => ({
    id: verse.id,
    number: verse.number,
    title: verse.title,
    content: verse.content
});