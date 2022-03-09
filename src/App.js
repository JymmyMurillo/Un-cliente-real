import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import ShoppingSummary from "./pages/ShoppingSummary";

function App() {
  return (
    <>
      <div className="own-bg-body-app">
        <div>
          <NavBar />
        </div>

        <div className="own-body-pages px-4 d-flex flex-column justify-content-center">
          {/*<HomePage />*/}
          {/*<Categories />*/}
          {/*<Products />*/}
          <ShoppingCart />
          {/*<ShoppingSummary />*/}
        </div>

        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
