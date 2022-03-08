import hogar from "../images/hogar.svg";

export default function ShoppingCartCard() {
  return (
    <a href="">
      <div className="own-product-card  rounded-3 ">
        <img
          className="own-img-card"
          src={hogar}
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
  );
}