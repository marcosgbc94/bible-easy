import { SelectReading } from "@/Presentation/Components/SelectReading";
import { BookEntity } from '@/Domain/Entity/BookEntity';
import { ChapterEntity } from '@/Domain/Entity/ChapterEntity';

export type NavigatorProps = {
    bookList: BookEntity[]; 
    bookSelected: BookEntity; 
    chapterSelected: ChapterEntity; 
    onSelect: (element: number, type: string) => void;
};

export const Navigator = ({bookList, bookSelected, chapterSelected, onSelect}: NavigatorProps) => {
    return (
        <nav
            className="absolute navigator-width navigator-height navigator-left navigator-bottom bg-slate-200 rounded-xl flex justify-center items-center"
        >
            {bookList?.length > 0 && (
                <SelectReading type="books" list={bookList} selectedId={bookSelected.id ?? 1} onSelect={onSelect} />
            )}

            {bookSelected?.chapters?.length > 0 && (
                <SelectReading type="chapters" list={bookSelected && bookSelected.chapters} selectedId={chapterSelected.id ?? 1} onSelect={onSelect} />
            )}

            {chapterSelected?.verses?.length > 0 && (
                <SelectReading type="verses" list={chapterSelected && chapterSelected.verses} selectedId="1" onSelect={onSelect} />
            )}
        </nav>
    );
};