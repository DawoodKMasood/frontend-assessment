import CategoryTab from "../elements/category-tab";

const Categories = ({ categories }) => {
  return (
    <div className="flex gap-2 items-center">
      {categories?.map((category) => (
        <CategoryTab id={category.id} key={category.id} title={category.title} />
      ))}
    </div>
  );
};

export default Categories;