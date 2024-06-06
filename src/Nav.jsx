import { useNavigate, useLocation } from "react-router-dom";
import "./Nav.css";
export default function Nav({ setItemAdding }) {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  function handleClick() {
    setItemAdding(true);
  }
  console.log(location);
  return (
    <nav className="nav">
      {location == "/" && (
        <>
          <button className="nav__cart" onClick={() => navigate("/cart")}>
            Cart
          </button>
          <button className="nav__addItemButton" onClick={handleClick}>
            Add item
          </button>
        </>
      )}
      {location == "/cart" && (
        <button className="nav__home" onClick={() => navigate("/")}>
          Home page
        </button>
      )}
    </nav>
  );
}
