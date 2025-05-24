export const SelectReading = ({type, list, onSelect, selectedId}: {type: string, list: Array<object>, onSelect: (element: number, type: string) => void, selectedId?: number}) => {
    return (
        <select 
            className={"h-full p-2 rounded-lg bg-slate-300 " + (type === "books" ? "w-100" : "w-50")} 
            onChange={(element) => onSelect(parseInt(element.target.value), type)} value={selectedId || 0}
        >
            {
                type === "chapters" ? (
                    <option value="0">Cap.</option>
                ) : (type === "verses" ? (
                    <option value="0">Ver.</option>
                ) : (
                    <option value="0">Libros</option>
                ))
            }
            {list && list.map((item: any, index) => (
                <option key={index + 1} value={item.id}>
                {item.name ? item.name : item.number}
                </option>
            ))}
        </select>
    );
};