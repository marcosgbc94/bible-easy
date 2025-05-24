import { HomeViewModel } from '@/Presentation/Screens/Home/HomeViewModel';
import { Navigator } from "@/Presentation/Layouts/Navigator/Navigator";
import { ReadingsList } from '@/Presentation/Layouts/ReadingsList/ReadingsList';
import { useState } from 'react';

export const Home = () => {
  const [showReadingsList, setShowReadingsList] = useState(false);
  const { books, book, chapters, chapter, verses, verse, loading, handleSelectBook, handleSelectChapter, handleSelectVerse, readings, addReading, handleGetCurrentReading } = HomeViewModel();

  const ReadingsListHandleClick = () => {
    setShowReadingsList(!showReadingsList);
  };

  const ReadingsAddItemHandleClick = () => {
    addReading();
  }

 

  const selectReadingHandler = (element: number, type: 'books' | 'chapters' | 'verses') => {
    switch (type) {
      case "books":
        handleSelectBook(element);
        break;
      case "chapters":
        handleSelectChapter(book.id, element);
        break;
      case "verses":
        handleSelectVerse(book.id, chapter.id, element);
        break;
    }
}

  return (
    <div className="fixed w-full h-full bg-slate-50">
      {loading && <p>Cargando...</p>}
  
      {!loading && books.length > 0 && (
        <>
          <Navigator 
            books={books} 
            chapters={chapters}
            verses={verses}

            bookSelected={handleGetCurrentReading && handleGetCurrentReading.book} 
            chapterSelected={handleGetCurrentReading && handleGetCurrentReading.chapter} 
            verseSelected={handleGetCurrentReading && handleGetCurrentReading.verse} 

            onSelect={selectReadingHandler} 
            onAddReading={ReadingsAddItemHandleClick}
            onToggleReadingsLayer={ReadingsListHandleClick}
          />
          {
            showReadingsList && <ReadingsList readings={readings} />
          }
        </>
      )}
    </div>
  );  

};
