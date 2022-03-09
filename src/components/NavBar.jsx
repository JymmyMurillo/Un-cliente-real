import Compralo from "../images/Compralo.svg";
import Footer from "./Footer";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top own-bg-navBar-footer own-nav-size">
      <div className="container-fluid">
        <a href="home">
          <img
            src={Compralo}
            alt="Logo Compralo"
            className="own-nav-main-logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end own-bg-navBar-footer"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <a className="navbar-brand" href="home">
                <img src={Compralo} alt="Logo Compralo" />
              </a>
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end align-items-center flex-grow-1">
              <li className="nav-item">
                <a className="nav-link " href="home">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="categories">
                  Categorias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="shoppingcart">
                  Carrito de Compras
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="shoppingsummary">
                  Resumen de Comporas
                </a>
              </li>
            </ul>
          </div>
          <div
            className="offcanvas-header justify-content-center"
            id="offcanvasNavbarLabel"
          >
            <a className="navbar-brand" href="#">
              <Footer />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
