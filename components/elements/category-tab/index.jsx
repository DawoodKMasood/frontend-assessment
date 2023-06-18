import { useRecoilState } from "recoil";

import { selectedCategoryAtom } from "@/recoil/atom/selectedCategoryAtom";

const CategoryTab = (props) => {

    const [selectedCategory, _setSelectedCategory ] = useRecoilState(selectedCategoryAtom);

    const {id, title} = props;

    const setSelectedCategory = (value) => {
        _setSelectedCategory(value);
    }

    return (
        <button className={`${selectedCategory === id && 'border-b-[4px] !border-orange-500 text-orange-500'} border-b-[4px] border-transparent font-semibold px-10 transition-all`} onClick={() => setSelectedCategory(id)} type="button">
            {title}
        </button>
    )
}

export default CategoryTab;