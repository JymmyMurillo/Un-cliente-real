

export function ProductCard() {
  return (
    <>
      {/*Button trigger modal*/}

      <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div className="own-product-card  rounded-3 ">
          <img
            className="own-img-card"
            src=""
            alt="Imagen de Categoria"
          ></img>
          <div className="own-product-name d-flex flex-column align-items-center justify-content-evenly">
            <p className="m-0 text-center own-product-title">
              Hogar y Decoracíon
            </p>
            <p className="m-0 text-center own-product-title">COP $165.000</p>
          </div>
        </div>
      </a>

      {/*Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h5 className="modal-title" id="exampleModalLabel">
                Hogar y Decoracíon
              </h5>
            </div>
            <div className="modal-body d-flex flex-wrap justify-content-center gap-2">
              <img
                classNameName="own-img-modal-card"
                src=""
                alt="Imagen de Categoria"
              ></img>
              <p className="own-modal-description">
                Tamaño del producto: aproximadamente 485 x 185 x 36 mm / 14.55 *
                5.55 * 1.08in <br></br>Tecla de acceso rápido: tecla de
                combinación inteligente FN<br></br> Elasticidad del botón: 55 +
                -8 <br></br>Peso del teclado: 980 g <br></br>Puerto de teclado:
                USB <br></br>Voltaje de funcionamiento: 5 V <br></br>
                Características: Surco para la colocación del teléfono móvil.
                <br></br>
                Color: blanco<br></br> Longitud del cable: 1,6 m
              </p>
            </div>
            <div className="modal-footer">
              <p className="own-modal-price">COP $165.000</p>
              <button type="button" className="btn own-modal-cart-button">
                Al Carrito
              </button>
              <button
                type="button"
                className="btn own-modal-close-button"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
