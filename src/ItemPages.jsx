import { useNavigate, useParams } from "react-router-dom";
import "./ItemPages.css";
export default function ItemPages({ pages }) {
  const navigate = useNavigate();
  const pagesButtons = [...Array(pages)];
  let { pageId } = useParams();
  pageId = pageId ?? 1;

  return (
    <ol className="content__pages">
      {pagesButtons.map((el, i) => {
        return (
          <li
            className={i + 1 == pageId ? "content__page selected" : "content__page"}
            key={i}
            onClick={() => navigate(`/page/${i + 1}`)}>
            {i + 1}
          </li>
        );
      })}
    </ol>
  );
}
