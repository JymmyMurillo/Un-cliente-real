import Compralo from "../../images/Compralo.svg"

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top own-bg-navBar-footer own-nav-size">
      <div class="container-fluid">
        <a href="#">
          <img src={Compralo} alt="Logo Compralo" class="own-nav-main-logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end own-bg-navBar-footer"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <a class="navbar-brand" href="#">
                <img src={Compralo} alt="Logo Compralo" />
              </a>
            </h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link " href="#">
                  Inicio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Categorias
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Carrito de Compras
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Resumen de Comporas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
