import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/Home";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";

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
        </div>

        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
