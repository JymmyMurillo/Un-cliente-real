import { ProductCard } from "../components/ProductCard";
import ProductsFetch from "../services/productsFetch";

export default function Products({ categoryName }) {
  const items = ProductsFetch(categoryName);

  return (
    <div className=" d-flex flex-wrap justify-content-evenly gap-3">
      {items.map((element) => (
        <ProductCard cardContent={element} key={element.id}></ProductCard>
      ))}
    </div>
  );
}
