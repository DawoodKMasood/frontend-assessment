import CategoryTab from "../elements/category-tab";

const CategoriesSelection = (props) => {

    const { categories } = props;

    return (
        <div className="flex gap-2 items-center">
            {categories?.length && categories.map ((category) => (
                <CategoryTab id={category.id} key={category.id} title={category.title} />
            ))}
        </div>
    )
}

export default CategoriesSelection;