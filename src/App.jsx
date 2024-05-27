import { useState } from "react";
import AddItemElement from "./AddItemElement.jsx";
import Nav from "./Nav.jsx";
import { ProductsContext } from "./ProductsContext.jsx";
import Items from "./Items.jsx";
import "./App.css";

const productsDefault = [
  {
    name: "Wireless Mouse",
    description: "A high-precision wireless mouse with ergonomic design.",
    price: 29.99,
    liked: false,
  },
  {
    name: "Mechanical Keyboard",
    description: "A durable mechanical keyboard with customizable RGB lighting.",
    price: 79.99,
    liked: false,
  },
  {
    name: "USB-C Hub",
    description: "A versatile USB-C hub with multiple ports for all your connectivity needs.",
    price: 39.99,
    liked: false,
  },
];

function App() {
  const [products, setProducts] = useState(productsDefault);
  const [isItemAdding, setItemAdding] = useState(false);

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      <main className="main">
        <Nav setItemAdding={setItemAdding} />
        {isItemAdding ? <AddItemElement setItemAdding={setItemAdding} /> : false}
        <Items />
      </main>
    </ProductsContext.Provider>
  );
}

export default App;
