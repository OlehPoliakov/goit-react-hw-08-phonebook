import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import styles from './GoBack.module.scss';

function GoBack({ text, path }) {
  const navigate = useNavigate();
  const goToPage = () => navigate(path);

  return (
    <Button className={styles.Button} type="button" onClick={goToPage}>
      <FaLongArrowAltLeft />
      <span className={styles.Label}>{text}</span>
    </Button>
  );
}

GoBack.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
};

export default GoBack;
