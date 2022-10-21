import './filter.css';
import { useDataContext } from '../../context/dataContext';

const Filter = () => {
  const {
    data: { categoryData, selectedCategory },
    dataDispatch,
  } = useDataContext();

  return (
    <div class="main__container-filters">
      {categoryData.map(category => {
        return (
          <button
            className={`button btn-chip btn-outline  ${
              selectedCategory === category.categoryName ? `active` : ``
            }`}
            id={category._id}
            onClick={e =>
              dataDispatch({
                type: 'SORT_BY_CATEGORY',
                payload: category.categoryName,
              })
            }
          >
            {category.categoryName}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
