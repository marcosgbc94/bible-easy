import { ReadingEntity } from "@/Domain/Entity/ReadingEntity";

export type ReadingsListProps = {
  readings: Array<ReadingEntity>;
};

export const ReadingsList = ({ readings }: ReadingsListProps) => {
  return (
    <div className="absolute readings-list-width readings-list-height readings-list-left readings-list-bottom rounded-xl p-2 bg-slate-200 overflow-y-auto">
      {!readings || readings.length === 0 ? (
        <div className="w-full h-full flex justify-center items-center">
          <small className="text-gray-500">Ninguna lectura</small>
        </div>
      ) : (
        <ul className="space-y-1 text-sm text-gray-700">
          {readings.map((reading, index) => (
            <li key={index} className="border-b border-gray-300 pb-1">
              {reading.book.name} {reading.chapter.number}:{reading.verse.number}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
