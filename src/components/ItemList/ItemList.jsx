import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState, useMemo } from "react";
import { useItemsStore } from "../../stores/itemsStore";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList() {
  const [sortBy, setSortBy] = useState("default");
  // const {items, handleRemoveItem, handleToggleItem} = useItemsContext();
  const items = useItemsStore((state) => state.items);
  const removeItem = useItemsStore((state) => state.removeItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  //useMemo is used to wrap expensive operations to only run on specific re-renders.
  //In this case its copying the array (if it were vary large) and sorting it
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") return b.packed - a.packed;
        if (sortBy === "unpacked") return a.packed - b.packed;
        return;
      }),
    [items, sortBy]
  );

  return (
    <section className="flex-container" data-scroll={items.length > 10}>
      <section className="sorting">
        <Select
          defaultValue={sortingOptions[0]}
          options={sortingOptions}
          onChange={(option) => setSortBy(option.value)}
        />
      </section>
      <ul className="item-list">
        {items.length === 0 && <EmptyView />}

        {sortedItems.map((it) => {
          return (
            <Item
              key={it.id}
              item={it}
              onRemoveItem={removeItem}
              onToggleItem={toggleItem}
            />
          );
        })}
      </ul>
    </section>
  );
}

function Item({ item, onRemoveItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>

      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}
