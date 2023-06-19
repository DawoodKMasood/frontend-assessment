import { useRecoilState } from 'recoil';
import { selectedCategoryAtom } from '@/recoil/atom/selectedCategoryAtom';

const CategoryTab = (props) => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryAtom);

  const { id, title } = props;

  const handleCategoryClick = () => {
    setSelectedCategory(id);
  };

  const isSelected = selectedCategory === id;

  return (
    <button
      className={`border-b-[4px] font-semibold px-10 transition-all ${
        isSelected ? 'border-orange-500 text-orange-500' : 'border-transparent'
      }`}
      onClick={handleCategoryClick}
      type="button"
    >
      {title}
    </button>
  );
};

export default CategoryTab;