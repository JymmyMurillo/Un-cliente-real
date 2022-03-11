import { useCart } from "react-use-cart";
import ShoppingCartCard from "../components/ShoppingCartCard";

export default function ShoppingCart({ handleCartItems }) {
  const { isEmpty,totalItems, items, cartTotal, updateItemQuantity, removeItem, emptyCart } =
    useCart();
  console.log("estoy en shoppingCart", items);

  if (isEmpty) return (
    <h1 className="text-center own-p-total-card fs-1">
      Tu carrito está vacío, por favor agrega productos de alguna categoría al
      carrito.
    </h1>
  );

  return (
    <div className=" d-flex flex-wrap justify-content-evenly gap-3">
      {items.map((item, index) => {
        return (
          <ShoppingCartCard
            product={item}
            updateItemQuantity={updateItemQuantity}
            removeItem={removeItem}
            key={index}
          />
        );
      })}

      <div className="own-cart-card  rounded-3 d-flex flex-row align-items-center justify-content-between">
        <div className="own-half">
          <a href={`https://wa.me/+573502981239?text=Hola, me interesa comprar los siguientes productos: ${items.map(
              (item) => {
                return (
                  "%0A%0A*- " +
                  item.name +
                  "*%0AUnidades: " +
                  item.quantity +
                  "%0ACosto: " +
                  item.itemTotal
                );
              }
            )} %0A%0AValor Total: _*COP $${cartTotal}*_`} /*Send WhatsApp message*/
            target="_blank"
            rel="noreferrer"
            className="own-total-card d-flex align-items-center justify-content-center rounded-3"
            onClick={() => {
              console.log("onclick enviar pedido");
              handleCartItems(items, cartTotal);
              emptyCart();
         
            }}
          >
            Enviar Pedido
          </a>
        </div>
        <div className="d-flex flex-row justify-content-evenly own-product-text-cart own-half m-auto">
          <p className="m-0 text-center own-product-cart-name">Total</p>
          <p className="m-0 text-center own-product-cart-name d-flex align-items-center justify-content-evenly">
            ${cartTotal}
          </p>
        </div>
      </div>
      <p className="own-p-total-card">
        Cuando envíes el pedido se abrira una ventana de Whatsapp, envia el
        mensaje que aparezca, es la forma en que nos enteraremos de tu pedido.
      </p>
    </div>
  );
}
