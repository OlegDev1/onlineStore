import AddItemElement from "../src/AddItemElement";
import Items from "../src/Items";
import ItemPages from "../src/ItemPages";

export default function HomePage({ isItemAdding, setItemAdding, itemPages }) {
  return (
    <>
      {isItemAdding ? <AddItemElement setItemAdding={setItemAdding} /> : false}
      <Items />
      <ItemPages pages={itemPages} />
    </>
  );
}
