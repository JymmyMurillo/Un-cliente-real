import { useCart } from "react-use-cart";

export function ProductCard({ cardContent }) {
  const { addItem } = useCart();

  console.log("estoy en productCard", cardContent);
  return (
    <>
      {/*Button trigger modal*/}

      <a
        href="none"
        data-bs-toggle="modal"
        data-bs-target={`#${cardContent.id}`}
      >
        <div className="own-product-card  rounded-3 ">
          <img
            className="own-img-card rounded-3"
            src={`../images/${cardContent.img}`}
            alt={`Imagen ${cardContent.name}`}
          ></img>
          <div className="own-product-name d-flex flex-column align-items-center justify-content-evenly">
            <p className="m-0 text-center own-product-title">
              {cardContent.name}
            </p>
            <p className="m-0 text-center own-product-title">
              COP ${cardContent.price}
            </p>
          </div>
        </div>
      </a>

      {/*Modal */}
      <div
        className="modal fade"
        id={cardContent.id}
        tabIndex="-1"
        aria-labelledby={`${cardContent.name}${cardContent.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h5
                className="modal-title"
                id={`${cardContent.name}${cardContent.id}`}
              >
                {cardContent.name}
              </h5>
            </div>
            <div className="modal-body d-flex flex-wrap justify-content-center gap-2">
              <img
                className="own-img-modal-card"
                src={`../images/${cardContent.img}`}
                alt={`Imagen ${cardContent.name}`}
              ></img>
              <p className="own-modal-description">{cardContent.description}</p>
            </div>
            <div className="modal-footer">
              <p className="own-modal-price">COP ${cardContent.price}</p>
              <button
                type="button"
                className="btn own-modal-cart-button"
                onClick={() => addItem(cardContent)}
              >
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
