import { Link } from "react-router-dom";

export default function CategoryCard({ cardContent, handleCategoryName }) {
//console.log(handleCategoryName);
  return (
    <Link to="products"
      onClick={() => {
        //console.log("onclick");
        handleCategoryName(cardContent.name);
      }}
    >
      <div className="own-category-card rounded-3 ">
        <img
          className="own-img-card rounded-3"
          src={`../images/${cardContent.img}`}
          alt="Imagen de Categoria"
        ></img>
        <div className="own-category-name d-flex align-items-center justify-content-evenly gap-3">
          <p className="m-0 text-center own-category-title">
            {cardContent.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
