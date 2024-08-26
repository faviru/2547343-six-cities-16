import { useState } from 'react';
import { SortingArray } from '../../constants';
import { SortingType } from '../../types';
import { useAppDispatch } from '../../hooks';
import { setSortingMode } from '../../store/slices/offer-slice';

function SortingBlock() {
  const [isBlockOpened, setBlockState] = useState(false);
  const [sorting, setSetSortingType] = useState(SortingArray[0]);
  const handleOpenTab = () => {
    setBlockState(!isBlockOpened);
  };

  const dispatch = useAppDispatch();
  const handleSortClick = (sortMode: SortingType) => {
    setSetSortingType(sortMode);
    dispatch(setSortingMode(sortMode));
    setBlockState(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleOpenTab}
      >
        {sorting.value}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isBlockOpened &&
        <ul className="places__options places__options--custom places__options--opened">
          {SortingArray.map((item) => (
            <li
              className={`places__option 
              ${sorting === item ? 'places__option--active' : ''}`}
              key={item.name}
              onClick={() => handleSortClick(item)}
              tabIndex={0}
            >
              {item.value}
            </li>)
          )}
        </ul>}
    </form >
  );
}

export default SortingBlock;