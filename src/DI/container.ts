import { Container } from "inversify";
import { BibleRepository } from "@/Domain/Repository/BibleRepository";
import { BibleRepositoryImp } from "@/Data/Repository/BibleRepositoryImp";
import { ReadingRepository } from "@/Domain/Repository/ReadingRepository";
import { ReadingRepositoryImp } from "@/Data/Repository/ReadingRepositoryImp";
import { BibleDataSource } from "@/Domain/DataSource/BibleDataSource";
import { BibleDataSourceImp } from "@/Data/DataSource/BibleDataSourceImp";
import { ReadingDataSource } from "@/Domain/DataSource/ReadingDataSource";
import { ReadingDataSourceImp } from "@/Data/DataSource/ReadingDataSourceImp";
import { TYPES } from "@/DI/types";
import { GetAllBooks } from "../Domain/UseCases/GetAllBooks";
import { AddReading } from "../Domain/UseCases/AddReading";
import { GetAllReadings } from "../Domain/UseCases/GetAllReadings";
import { GetNextIdReading } from "../Domain/UseCases/GetNextIdReading";
import { GetBook } from "../Domain/UseCases/GetBook";
import { EditReading } from "../Domain/UseCases/EditReading";
import { GetAllChapters } from "../Domain/UseCases/GetAllChapters";
import { GetReading } from "../Domain/UseCases/getReading";

const container = new Container();

// Registro de dependencias en el contenedor
container.bind<BibleDataSource>(TYPES.BibleDataSource).to(BibleDataSourceImp);
container.bind<ReadingDataSource>(TYPES.ReadingDataSource).to(ReadingDataSourceImp);
container.bind<BibleRepository>(TYPES.BibleRepository).to(BibleRepositoryImp);
container.bind<ReadingRepository>(TYPES.ReadingRepository).to(ReadingRepositoryImp);

container.bind<GetAllBooks>(TYPES.GetAllBooks).to(GetAllBooks);
container.bind<GetAllChapters>(TYPES.GetAllChapters).to(GetAllChapters);
container.bind<GetBook>(TYPES.GetBook).to(GetBook);
container.bind<AddReading>(TYPES.AddReading).to(AddReading);
container.bind<EditReading>(TYPES.EditReading).to(EditReading);
container.bind<GetAllReadings>(TYPES.GetAllReadings).to(GetAllReadings);
container.bind<GetNextIdReading>(TYPES.GetNextIdReading).to(GetNextIdReading);
container.bind<GetReading>(TYPES.GetReading).to(GetReading);

export { container };
