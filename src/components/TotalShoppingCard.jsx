export default function TotalShoppingCard() {
  return (
    <div className="own-cart-card  rounded-3 d-flex flex-row align-items-center justify-content-between">
      <div className="own-total-card d-flex align-items-center justify-content-center rounded-3">
        Enviar Pedido
      </div>
      <div className="d-flex flex-row justify-content-between own-product-text-cart own-half m-auto">
        <div className="own-product-cart-name"></div>
        <div className="">
          <p className="m-0 text-center own-product-cart-name">Total</p>
        </div>
        <div>
          <p className="m-0 text-center own-product-cart-name d-flex align-items-center justify-content-evenly">
            $165.000
          </p>
        </div>
      </div>
    </div>
  );
}
