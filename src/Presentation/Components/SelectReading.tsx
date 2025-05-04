export const SelectReading = ({type, list, onSelect, selectedId}: {type: string, list: Array<object>, onSelect: (element: number, type: string) => void, selectedId?: number}) => {
    return (
        <select onChange={(element) => onSelect(parseInt(element.target.value), type)} value={selectedId || ""}>
        {list && list.map((item: any, index) => (
            <option key={index} value={item.id}>
            {item.name ? item.name : item.number}
            </option>
        ))}
        </select>
    );
};