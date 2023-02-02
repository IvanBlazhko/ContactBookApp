import { useDispatch, useSelector } from 'react-redux';

import { filterValue } from '../../Redux/ContactsSlices/ContactFilterSlice';
import { getFilter } from '../../Redux/ContactsSlices/selectors';

import Style from './style/FilterInput.module.css';

export const FilterInput = () => {
  const dispatch = useDispatch();

  const stateSearch = useSelector(getFilter);
  return (
    <input
      type="text"
      name="search"
      placeholder="Search"
      onChange={event => dispatch(filterValue(event.currentTarget.value))}
      value={stateSearch}
      className={Style.filter__input}
      required
    />
  );
};
export default FilterInput;
