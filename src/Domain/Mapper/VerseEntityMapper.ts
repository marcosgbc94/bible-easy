import { VerseEntity } from '@/Domain/Entity/VerseEntity';
import { VerseModel } from '@/Infrastructure/Model/VerseModel';

export const VerseEntityMapper = (Verse: VerseModel): VerseEntity => ({
    title: Verse.title,
    content: Verse.content
});