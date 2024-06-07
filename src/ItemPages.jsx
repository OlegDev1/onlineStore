import { useNavigate } from "react-router-dom";
import "./ItemPages.css";
export default function ItemPages({ pages }) {
  const navigate = useNavigate();
  const pagesButtons = [...Array(pages)];

  return (
    <ol className="content__pages">
      {pagesButtons.map((el, i) => {
        return (
          <li className="content__page" key={i} onClick={() => navigate(`/page/${i + 1}`)}>
            {i + 1}
          </li>
        );
      })}
    </ol>
  );
}
