import { BookModel } from "../Data/Model/BookModel";
import { ChapterModel } from "../Data/Model/ChapterModel";
import { VerseModel } from "../Data/Model/VerseModel";

export interface Reading {
    id: Number,
    book: BookModel,
    chapter: ChapterModel,
    verse: VerseModel
}