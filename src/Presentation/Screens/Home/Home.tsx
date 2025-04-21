// src/Presentation/Home/Home.tsx
import { HomeViewModel } from "@/Presentation/Screens/Home/HomeViewModel";

export const Home = () => {
  const { books, loading } = HomeViewModel();

  if (loading) return <p>Cargando libros...</p>;

  return (
    <div>
      <h1>Libros de la Biblia</h1>
      <ul>
        {books.name}
      </ul>
    </div>
  );
};
