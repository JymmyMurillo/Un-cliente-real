import Footer from "./Footer";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top own-bg-navBar-footer own-nav-size">
      <div className="container-fluid">
        <Link to="home">
          <img
            src={`../images/Compralo.svg`}
            alt="Logo Compralo"
            className="own-nav-main-logo"
          />
        </Link>
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
              <Link to="home" className="navbar-brand">
                <img src={`../images/Compralo.svg`} alt="Logo Compralo" />
              </Link>
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
                <NavLink
                  to="/home"
                  className={`nav-link ${({ isActive }) =>
                    isActive
                      ? "active"
                      : ""}`} /*the active class is added when the path is equal to "/home", can only be done with the <NavLink> tag*/
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive
                      ? "own-active"
                      : "active"}`} /*the active class is added when the path is equal to "/categories", can only be done with the <NavLink> tag*/
                  to="/categories"
                >
                  Categorias
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "own-active" : "active"}`}
                  /*the active class is added when the path is equal to "/shoppingcart", can only be done with the <NavLink> tag*/ to="/shoppingcart"
                >
                  Carrito de Compras
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${({ isActive }) =>
                    isActive ? "own-active" : "active"}`}
                  /*the active class is added when the path is equal to "/shoppingsummary", can only be done with the <NavLink> tag*/ to="/shoppingsummary"
                >
                  Resumen de Comporas
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="offcanvas-header justify-content-center"
            id="offcanvasNavbarLabel"
          >
            <div className="navbar-brand">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
