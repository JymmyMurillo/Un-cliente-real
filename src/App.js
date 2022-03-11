import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import ShoppingSummary from "./pages/ShoppingSummary";

function App() {
  const [categoryName, setCategoryName] = useState("");

  function handleCategoryName(name) {
    setCategoryName(name);
  }
  console.log("estoy en app", categoryName);

  const [cartItems, setCartItems] = useState([]);
  const [totalCart, setTotalCart] = useState("");

  function handleCartItems(items, totalCart) {
    setCartItems(items);
    setTotalCart(totalCart);
  }

  return (
    <BrowserRouter>
      <div className="own-bg-body-app">
        <div>
          <NavBar />
        </div>

        <div className="own-body-pages px-2 d-flex flex-column justify-content-center">
          <CartProvider>
            <Routes>
              <Route path="" element={<HomePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route
                path="/categories"
                element={<Categories handleCategoryName={handleCategoryName} />}
              />
              <Route
                path="/products"
                element={<Products categoryName={categoryName} />}
              />

              <Route
                path="/categories/products"
                element={<Navigate to="/products" />}
              />
              <Route
                path="/shoppingcart"
                element={<ShoppingCart handleCartItems={handleCartItems} />}
              />
              <Route
                path="/shoppingsummary"
                element={
                  <ShoppingSummary
                    cartItems={cartItems}
                    totalCart={totalCart}
                  />
                }
              />
            </Routes>
          </CartProvider>
        </div>

        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
