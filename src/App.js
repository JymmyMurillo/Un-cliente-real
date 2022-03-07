import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="own-bg-body-app">
        <div>
          <NavBar />
        </div>

        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
