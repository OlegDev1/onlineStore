import { useNavigate } from "react-router-dom";
import "./Nav.css";
export default function Nav({ setItemAdding }) {
  const navigate = useNavigate();
  function handleClick() {
    setItemAdding(true);
  }
  return (
    <nav className="nav">
      <button className="nav__cart" onClick={() => navigate("/cart")}>
        Cart
      </button>
      <button className="nav__addItemButton" onClick={handleClick}>
        Add item
      </button>
    </nav>
  );
}
