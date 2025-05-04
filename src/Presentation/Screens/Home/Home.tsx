import { HomeViewModel } from '@/Presentation/Screens/Home/HomeViewModel';
import { Navigator } from "@/Presentation/Layouts/Navigator/Navigator";

export const Home = () => {
  const { books, book, chapter, loading, selectBook, selectChapter } = HomeViewModel();

  const selectReadingHandler = (element: number, type: 'books' | 'chapters' | 'verses') => {
    switch (type) {
      case "books":
        selectBook(element);
        break;
      case "chapters":
        selectChapter(book.id, element);
        break;
    }
}

  return (
    <div className="fixed w-full h-full bg-slate-50">
      {loading && <p>Cargando...</p>}
  
      {!loading && books.length > 0 && (
        <Navigator bookList={books} bookSelected={book} chapterSelected={chapter} onSelect={selectReadingHandler} />
      )}
    </div>
  );  

};
