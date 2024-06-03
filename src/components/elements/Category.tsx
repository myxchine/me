import { Category } from "@/server/interface";

const CategoryComponent: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      {category.description && <p>{category.description}</p>}
      {category.image && <img src={category.image} alt={category.name} />}
    </div>
  );
};

export default CategoryComponent;
