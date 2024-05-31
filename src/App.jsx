import { useState } from "react";
import AddItemElement from "./AddItemElement.jsx";
import Nav from "./Nav.jsx";
import { ProductsContext } from "./ProductsContext.jsx";
import { ProductPropertiesContext } from "./ProductsPropertiesContext.jsx";
import Items from "./Items.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ItemDetails from "./ItemDetails.jsx";

const productsDefault = [
  {
    id: 0,
    name: "Wireless Mouse",
    description: "A high-precision wireless mouse with ergonomic design.",
    price: 29.99,
  },
  {
    id: 1,
    name: "Mechanical Keyboard",
    description: "A durable mechanical keyboard with customizable RGB lighting.",
    price: 79.99,
  },
  {
    id: 2,
    name: "USB-C Hub",
    description: "A versatile USB-C hub with multiple ports for all your connectivity needs.",
    price: 39.99,
  },
];
const productsDefaultProperties = {
  0: { liked: false, cart: false },
  1: { liked: false, cart: false },
  2: { liked: false, cart: false },
};

function App() {
  const [products, setProducts] = useState(productsDefault);
  const [productsProperties, setProductsProperties] = useState(productsDefaultProperties);
  const [isItemAdding, setItemAdding] = useState(false);

  return (
    <>
      <ProductsContext.Provider value={[products, setProducts]}>
        <ProductPropertiesContext.Provider value={[productsProperties, setProductsProperties]}>
          <main className="main">
            <Nav setItemAdding={setItemAdding} />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {isItemAdding ? <AddItemElement setItemAdding={setItemAdding} /> : false}
                    <Items />
                  </>
                }
              />
              <Route path="/cart" element={<Items isCart={true} />} />
              <Route path="/product/:id" element={<ItemDetails />} />
            </Routes>
          </main>
        </ProductPropertiesContext.Provider>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
