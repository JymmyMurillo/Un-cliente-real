import ShoppingSummaryCard from "../components/ShoppingSummaryCard";

export default function ShoppingSummary({ cartItems, totalCart }) {
  console.log("estoy en summaryCart", cartItems);

  if (cartItems.length === 0)
    return (
      <h1 className="text-center own-p-total-card fs-1">
        No has enviado un pedido, por favor agrega productos de alguna categoría al carrito y envia tu pedido.
      </h1>
    );
  
  return (
    <div className=" d-flex flex-wrap justify-content-evenly gap-3">
      <p className="own-p-total-card">
        Has enviado un pedido con lo siguiente:
      </p>

      {cartItems.map((item, index) => {
        return <ShoppingSummaryCard product={item} key={index} />;
      })}

      <div className="own-cart-card  rounded-3 d-flex flex-row align-items-center justify-content-between">
        <div className="d-flex flex-row justify-content-evenly own-product-text-cart own-half m-auto">
          <p className="m-0 text-center own-product-cart-name">Total</p>
          <p className="m-0 text-center own-product-cart-name d-flex align-items-center justify-content-evenly">
            ${totalCart}
          </p>
        </div>
      </div>
      <p className="own-p-total-card">
        Debes verificar que el mensaje de Whatsapp se haya enviado, de lo contrario tendras que hacer el pedido nuevamente.
      </p>
    </div>
  );
}
