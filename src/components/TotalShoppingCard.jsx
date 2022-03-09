export default function TotalShoppingCard() {
  return (
    <div className="own-cart-card  rounded-3 d-flex flex-row align-items-center justify-content-between">
      <div className="own-half">
        <p className="own-total-card d-flex align-items-center justify-content-center rounded-3">
          Enviar Pedido
        </p>
      </div>
      <div className="d-flex flex-row justify-content-evenly own-product-text-cart own-half m-auto">
        
        <p className="m-0 text-center own-product-cart-name">Total</p>
        <p className="m-0 text-center own-product-cart-name d-flex align-items-center justify-content-evenly">
          $165.000
        </p>
      </div>
    </div>
  );
}
