import { BookModel } from "./BookModel";
import { ChapterModel } from "./ChapterModel";
import { VerseModel } from "./VerseModel";

export interface ReadingModel {
    id: number,
    book: Omit<BookModel, "chapters">,
    chapter: Omit<ChapterModel, "verses">,
    verse: VerseModel
}