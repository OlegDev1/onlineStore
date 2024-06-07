import { useState } from "react";
import Nav from "./Nav.jsx";
import { ProductsContext } from "./ProductsContext.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ItemDetailsPage from "../routes/ItemDetailsPage.jsx";
import CartPage from "../routes/CartPage.jsx";
import HomePage from "../routes/HomePage.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [productsProperties, setProductsProperties] = useState({});
  const [isItemAdding, setItemAdding] = useState(false);
  const itemPages = 4;

  return (
    <>
      <ProductsContext.Provider
        value={{ products, setProducts, productsProperties, setProductsProperties }}>
        <main className="main">
          <Nav setItemAdding={setItemAdding} />
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <HomePage
                    isItemAdding={isItemAdding}
                    setItemAdding={setItemAdding}
                    itemPages={itemPages}
                  />
                }
              />
              <Route
                path="page/:pageId"
                element={
                  <HomePage
                    isItemAdding={isItemAdding}
                    setItemAdding={setItemAdding}
                    itemPages={itemPages}
                  />
                }
              />
            </Route>
            <Route path="/cart" element={<CartPage isCart={true} />} />
            <Route path="/product/:id" element={<ItemDetailsPage />} />
          </Routes>
        </main>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
