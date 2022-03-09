import CategoryCard from "../components/CategoryCard";
import CategoriesFetch from "../services/categoriesFetch";

export default function Categories() {
  const items = CategoriesFetch();
  
  return (
    <div className=" d-flex flex-wrap justify-content-evenly gap-3">
      {items.map((element) => (
        <CategoryCard cardContent={element} key={element.id}></CategoryCard>
      ))}
    </div>
  );
}
