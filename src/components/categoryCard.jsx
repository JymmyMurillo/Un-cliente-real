import hogar from "../images/hogar.svg";

export default function CategoryCard() {
  return (
    <a href="products">
      <div className="own-category-card rounded-3 ">
        <img
          className="own-img-card"
          src={hogar}
          alt="Imagen de Categoria"
        ></img>
        <div className="own-category-name d-flex align-items-center justify-content-evenly gap-3">
          <p className="m-0 text-center own-category-title">
            Hogar y Decoracíon
          </p>
        </div>
      </div>
    </a>
  );
}
