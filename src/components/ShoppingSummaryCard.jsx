export default function ShoppingSummaryCard({ product }) {
  return (
    <div className="own-cart-card  rounded-3 d-flex flex-row align-items-center">
      <img
        className="own-img-cart-card rounded-3"
        src={`../images/${product.img}`}
        alt="Imagen de Categoria"
      ></img>
      <div className="d-flex flex-row justify-content-arround align-items-center own-product-text-cart">
        <div className="own-product-cart-name d-flex flex-wrap align-items-center justify-content-evenly">
          <p className="m-0 text-center">{product.name}</p>
          <p className="my-0 mx-1 text-center">COP ${product.price}</p>
        </div>
        <div className="d-flex flex-row align-items-center">
          <div className="own-product-cart-title fw-bold mt-1">
            {product.quantity}
          </div>

          <p className="m-0 own-product-cart-title fw-bold  mx-2 mt-1">
            {" "}
            Und.{" "}
          </p>
        </div>
        <div>
          <p className="my-0 mx-2 text-center own-product-cart-name d-flex align-items-center justify-content-evenly">
            ${product.itemTotal}
          </p>
        </div>
      </div>
    </div>
  );
}
