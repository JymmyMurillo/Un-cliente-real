import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import ShoppingSummary from "./pages/ShoppingSummary";

function App() {
  const [cardName, setCardName] = useState("");

  function handleCategoryName(name) {
    setCardName(name);
  }
  console.log(cardName);

  return (
    <BrowserRouter>
      <div className="own-bg-body-app">
        <div>
          <NavBar />
        </div>

        <div className="own-body-pages px-4 d-flex flex-column justify-content-center">
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
              element={<Products categoryName={cardName} />}
            />

            <Route
              path="/categories/products"
              element={<Navigate to="/products" />}
            />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/shoppingsummary" element={<ShoppingSummary />} />
          </Routes>
        </div>

        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
