import ShoppingCartCard from "../components/ShoppingCartCard";
import TotalShoppingCard from "../components/TotalShoppingCard";

export default function ShoppingCart() {
  return (
    <div className=" d-flex flex-wrap justify-content-evenly gap-3">
      <ShoppingCartCard />
      <TotalShoppingCard />
      <p className="own-p-total-card">
        Cuando envíes el pedido se abrira una ventana de Whatsapp, envia el
        mensaje que aparezca, es la forma en que nos enteraremos de tu pedido.
      </p>
    </div>
  );
}