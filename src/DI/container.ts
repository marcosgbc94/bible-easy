import { Container } from "inversify";
import { BibleRepository } from "@/Domain/Repository/BibleRepository";
import { BibleRepositoryImp } from "@/Data/Repository/BibleRepositoryImp";
import { BibleDataSource } from "@/Domain/DataSource/BibleDataSource";
import { BibleDataSourceImp } from "@/Data/DataSource/BibleDataSourceImp";
import { FindAllBooks } from "@/Domain/UseCase/FindAllBooks";
import { FindBookById } from "@/Domain/UseCase/FindBookById";
import { FindChapterById } from "@/Domain/UseCase/FindChapterById";
import { TYPES } from "@/DI/types";

const container = new Container();

// Registro de dependencias en el contenedor
container.bind<BibleDataSource>(TYPES.BibleDataSource).to(BibleDataSourceImp);  // Registrar la implementación
container.bind<BibleRepository>(TYPES.BibleRepository).to(BibleRepositoryImp);  // Registrar el repositorio
container.bind<FindAllBooks>(TYPES.FindAllBooks).to(FindAllBooks);
container.bind<FindBookById>(TYPES.FindBookById).to(FindBookById);
container.bind<FindChapterById>(TYPES.FindChapterById).to(FindChapterById);

export { container };
