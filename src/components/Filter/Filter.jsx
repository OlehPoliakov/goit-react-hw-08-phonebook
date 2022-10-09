import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

function Filter({ changeInput }) {
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

Filter.propTypes = {
  changeInput: PropTypes.func.isRequired,
};
