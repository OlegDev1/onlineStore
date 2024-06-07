import AddItemElement from "../src/AddItemElement";
import Items from "../src/Items";
import ItemPages from "../src/ItemPages";
import { useParams } from "react-router-dom";
import useGetItems from "../hooks/useGetItems";

export default function HomePage({ isItemAdding, setItemAdding, itemPages }) {
  let { pageId } = useParams();
  pageId = pageId ?? 1;
  useGetItems(pageId);
  return (
    <>
      {isItemAdding ? <AddItemElement setItemAdding={setItemAdding} /> : false}
      <Items page={pageId} />
      <ItemPages pages={itemPages} />
    </>
  );
}
