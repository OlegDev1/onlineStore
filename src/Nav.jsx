import "./Nav.css";
export default function Nav({ setItemAdding }) {
  function handleClick() {
    setItemAdding(true);
  }
  return (
    <nav className="nav">
      <button className="nav__addItemButton" onClick={handleClick}>
        Add item
      </button>
    </nav>
  );
}
