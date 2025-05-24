import { SelectReading } from "@/Presentation/Components/SelectReading";
import { BookModel } from '@/Data/Model/BookModel';
import { ChapterModel } from '@/Data/Model/ChapterModel';
import { VerseModel } from "@/Data/Model/VerseModel";
import { CiBoxList } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

export type NavigatorProps = {
    books: BookModel[]; 
    chapters: ChapterModel[]; 
    verses: VerseModel[]; 
    bookSelected: BookModel; 
    chapterSelected: ChapterModel;
    verseSelected: VerseModel
    onSelect: (element: number, type: string) => void;
    onAddReading: () => void,
    onToggleReadingsLayer: () => void
};

export const Navigator = ({books, chapters, verses, bookSelected, chapterSelected, verseSelected, onSelect, onAddReading, onToggleReadingsLayer}: NavigatorProps) => {

    return (
        <nav
            className="absolute navigator-width navigator-height navigator-left navigator-bottom bg-slate-200 rounded-xl flex justify-center items-center gap-2 p-2"
        >
            <button type="button" className="bg-blue-300 rounded-lg h-full p-2" onClick={onAddReading}>
                <CiCirclePlus />
            </button>

            <button type="button" className="bg-green-300 rounded-lg h-full p-2" onClick={onToggleReadingsLayer}>
                <CiBoxList />
            </button>

            {books?.length > 0 && (
                <SelectReading type="books" list={books} selectedId={bookSelected && bookSelected.id || 0} onSelect={onSelect} />
            )}

            {chapters?.length > 0 && (
                <SelectReading type="chapters" list={bookSelected && chapters} selectedId={chapterSelected && chapterSelected.id || 0} onSelect={onSelect} />
            )}

            {verses?.length > 0 && (
                <SelectReading type="verses" list={chapterSelected && verses} selectedId={verseSelected && verseSelected.id || 0} onSelect={onSelect} />
            )}
        </nav>
    );
};