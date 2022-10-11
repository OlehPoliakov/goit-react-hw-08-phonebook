import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/slice';
import styles from './Filter.module.scss';

function Filter() {
  const dispatch = useDispatch();

  const changeInput = e => {
    const value = e.currentTarget.value;
    dispatch(changeFilter(value));
  };

  return (
    <label className={styles.Label}>
      <input
        className={styles.Input}
        type="text"
        name="filter"
        onChange={changeInput}
        placeholder="Filter Find contacts by name"
      />
    </label>
  );
}

export default Filter;
