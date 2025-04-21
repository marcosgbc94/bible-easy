import { FindBookById } from "../Domain/UseCase/FindBookById";

export const TYPES = {
    BibleDataSource: Symbol.for("BibleDataSource"),
    BibleRepository: Symbol.for("BibleRepository"),
    FindAllBooks: Symbol.for("FindAllBooks"),
    FindBookById: Symbol.for("FindBookById"),
};
  