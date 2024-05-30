import { Routes, Route, useNavigate } from "react-router-dom";
import "./Nav.css";
export default function Nav({ setItemAdding }) {
  const navigate = useNavigate();
  function handleClick() {
    setItemAdding(true);
  }
  return (
    <nav className="nav">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <button className="nav__cart" onClick={() => navigate("/cart")}>
                Cart
              </button>
              <button className="nav__addItemButton" onClick={handleClick}>
                Add item
              </button>
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <button className="nav__home" onClick={() => navigate("/")}>
              Home page
            </button>
          }
        />
      </Routes>
    </nav>
  );
}
