import { BookModel } from "@/Data/Model/BookModel";
import { ChapterModel } from "@/Data/Model/ChapterModel";
import { VerseModel } from "@/Data/Model/VerseModel";
import { Reading } from "@/Presentation/types";

export const getNewIdReading = (readings: Reading<[]>) => {
    return readings.length ? readings.length + 1 : 1;
}





